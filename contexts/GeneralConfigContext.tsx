import Head from "next/head";
import { createContext, ReactNode, useContext, useReducer } from "react";

interface GeneralConfigProps {
    children: ReactNode;
    initialConfig: GeneralConfigState;
}
interface GeneralConfigState {
    mainProject: string;
    defaultTheme: string;
    tabTitle: string;
    defaultHome: string;
    defaultSignin: string;
    defaultDomain: string;
    defaultLang: string;
    defaultLoader: string;
    defaultLogo: string;
    defaultIcon: string;
    defaultSigninFormName: string;
    default_layout: string;
    api_ID_content: string;
    deviceData: any;
    logout: () => void;
    send_otp_admin: boolean;
}
const GeneralConfigContext = createContext<GeneralConfigState | any>(undefined);

const generalConfigReducer = (state: GeneralConfigState, action: Partial<GeneralConfigState>): GeneralConfigState => {
    return { ...state, ...action };
};

export const GeneralConfigProvider: React.FC<GeneralConfigProps> = ({ children, initialConfig }) => {
    const [config, dispatchConfig] = useReducer(generalConfigReducer, initialConfig);
    const logout = () => { }
    return (
        <GeneralConfigContext.Provider value={{ ...config, logout }}>
            {/* <Head>{config.defaultIcon && <link rel="icon" href={config.defaultIcon} />}</Head> */}
            {children}
        </GeneralConfigContext.Provider>
    );
};

export const useGeneralConfig = () => useContext(GeneralConfigContext);
