import { apiFetch } from "../api";
import { getDomainWithExtension } from "../generalFunction";

export async function getGeneralConfig(context: any, publicToken: string): Promise<string | null> {
  try {
    let href: string;
    if (context.ctx.req) {
      const host = context.ctx.req.headers['host'];
      const path = context.ctx.req.url;
      href = `${host}${path}`;
    } else {
      href = window.location.href;
    }
    const configRes = await apiFetch("/lookup/api/getTableData?allAttachment=false&rowDetails=true", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${publicToken}`,
      },
      body: JSON.stringify({
        tableName: "lookup_general_config",
        columns: [],
        conditions: [{ domain: { "=": getDomainWithExtension(href) } }],
        lang: "ar",
        rowsInPage: 1,
        sort: {},
        distinct: false,
        offset: -1,
        translated: true,
      }),
    });

    if (!configRes) {
      throw new Error("Failed to fetch public token");
    }
    return configRes.columnsData[0];
  } catch (error) {
    console.error("Error fetching public token:", error);
    return null;
  }
}
