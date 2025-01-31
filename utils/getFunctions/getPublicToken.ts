import { apiFetch } from "../api";

export async function getPublicToken(): Promise<string | null> {
  try {
    const publicTokenData = await apiFetch("/engine-rest/iidentity/getPublicToken", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const publicToken = publicTokenData.result;

    if (!publicToken) {
      throw new Error("Failed to fetch public token");
    }

    return publicToken;
  } catch (error) {
    console.error("Error fetching public token:", error);
    return null;
  }
}
