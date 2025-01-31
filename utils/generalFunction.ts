export function getDomainWithExtension(url: string | undefined) {
    if (!url) return null;

    try {
        let finalHostName = url.split(":")[0];
        return finalHostName.startsWith("www.")
            ? finalHostName.slice(4)
            : finalHostName;
    } catch (e) {
        console.error("Invalid URL:", e);
        return null;
    }
}
