import { createContext, useContext, ReactNode, useEffect } from "react";

interface PublicTokenContextType {
    token: string | null;
}

const PublicTokenContext = createContext<PublicTokenContextType>({ token: null });

export const PublicTokenProvider = ({
    children,
    token,
}: {
    children: ReactNode;
    token: string;
}) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window["platform"] = window["platform"] || {};
            window["platform"]["dummyToken"] = token;
        }
    }, [token]);

    return (
        <PublicTokenContext.Provider value={{ token }}>
            {children}
        </PublicTokenContext.Provider>
    );
};

export const usePublicToken = () => useContext(PublicTokenContext);
