import "@/styles/globals.css";
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { PublicTokenProvider } from "@/contexts/PublicTokenContext";
import { GeneralConfigProvider } from "@/contexts/GeneralConfigContext";
import { getPublicToken } from "@/utils/getFunctions/getPublicToken";
import { getGeneralConfig } from "@/utils/getFunctions/getGeneralConfig";
import { getMainForm } from "@/utils/getFunctions/getMainForm";
import { MainFormProvider } from "@/contexts/MainFormContext";

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <PublicTokenProvider token={pageProps.publicToken}>
        <GeneralConfigProvider initialConfig={JSON.parse(pageProps.projectData)}>
          <MainFormProvider initialForm={pageProps}>
            <Component {...pageProps} />
          </MainFormProvider>
        </GeneralConfigProvider>
      </PublicTokenProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  const publicToken = await getPublicToken();
  if (!publicToken) throw new Error("Failed to fetch public token");

  const configRes = await getGeneralConfig(context, publicToken);
  if (!configRes) throw new Error("Failed to fetch General Config");

  // const mainForm = await getMainForm(publicToken, false);
  // if (!mainForm) throw new Error("Failed to fetch Main Form");

  return {
    ...ctx,
    pageProps: {
      publicToken,
      projectData: JSON.stringify(configRes),
      // mainForm: mainForm
    },
  };
};