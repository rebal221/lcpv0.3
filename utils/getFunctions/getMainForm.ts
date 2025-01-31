import { apiFetch } from "../api";
import { apiFetchWithProxy } from "../apiProxy";

export async function getMainForm(
    publicToken: string,
    proxy: boolean
): Promise<string | null> {
    try {
        const formName = "main_layout";
        const tableName = "moec";
        const url = `/lookup/api/v1/openForm?name=${formName}&tableName=${tableName}&view=true`;

        const fetchFunction = proxy ? apiFetchWithProxy : apiFetch;

        const response = await fetchFunction(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${publicToken}`,
                formId: formName,
            },
        });

        if (!response || !response.data) {
            throw new Error("Failed to fetch main form");
        }

        return response.data;
    } catch (error) {
        console.error("Error fetching main form:", error);
        return null;
    }
}
