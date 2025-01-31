export interface FetchOptions extends RequestInit {
    token?: string;
}

/**
 * A universal fetch function that handles GET, POST, PUT, DELETE requests.
 * @param endpoint - API endpoint (relative path)
 * @param options - Request options (method, headers, body, etc.)
 * @returns JSON response or error
 */
export const apiFetchWithProxy = async (endpoint: string, options: FetchOptions = {}) => {
    try {
        const url = `${endpoint}`;
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            ...options.headers as Record<string, string>,
        };
        if (options.token) {
            headers["Authorization"] = `Bearer ${options.token}`;
        }
        const response = await fetch(url, {
            ...options,
            headers,
        });
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
};
