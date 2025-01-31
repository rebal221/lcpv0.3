import type { NextConfig } from "next";


const LOCAL_URL = process.env.LOCAL_URL || "http://localhost:8080/";
const STAGING_URL =
  process.env.STAGING_URL || "https://lcp02stg.infostrategic.com/api/";
const DEVELOPMENT_URL_API =
  process.env.DEVELOPMENT_URL_API || "https://lcp02.infostrategic.com/api/";
const DEVELOPMENT_URL =
  process.env.DEVELOPMENT_URL || "https://lcp02.infostrategic.com/";
const UAE_PASS_URL =
  process.env.UAE_PASS_URL || "https://stg-id.uaepass.ae/idshub/";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    VITE_CAMUNDA_ENGINE_BASE_URL: DEVELOPMENT_URL_API,
    VITE_CAMUNDA_ENGINE_BASE_URL_NOT_API: DEVELOPMENT_URL,
    NAVIGATE_CHANNEL: "NAVIGATE",
    LOADING_CHANNEL: "LOADING",
    TOAST_CHANNEL: "TOAST",
    VIDEO_CHANNEL: "VIDEO",
    SHOW_INSPECT_RIGHT_CLICK: "false",
    SHOW_INSPECT_F12: "true",
    SIGNIN_EXTERNALLY: "SIGNIN_EXTERNALLY",
    REDIRECT_SIGNIN: "REDIRECT_SIGNIN",
    SECRET_KEY: process.env.SECRET_KEY || "/+*INFO>221/&@",
    NAVIGATE_WITH_PARAMETER: "NAVIGATE_WITH_PARAMETER" 
  },
  i18n: {
    locales: ["default", "en", "ar"],
    defaultLocale: "default",
    localeDetection: false,
  },
  serverRuntimeConfig: {
    DEVELOPMENT_URL_API: DEVELOPMENT_URL_API,
    DEVELOPMENT_URL: DEVELOPMENT_URL,
    UAE_PASS_URL: UAE_PASS_URL
  },
  rewrites: () => {
    return [
      {
        source: "/lookup/:slug*",
        destination: `${DEVELOPMENT_URL}lookup/:slug*`,
      },
      {
        source: "/engine-rest/:slug*",
        destination: `${DEVELOPMENT_URL}engine-rest/:slug*`,
      },
      {
        source: "/video_call/:slug*",
        destination: `${DEVELOPMENT_URL}video_call/:slug*`,
      },
      {
        source: "/general-apis/:slug*",
        destination: `${DEVELOPMENT_URL_API}general-apis/:slug*`,
      },
      {
        source: "/biservice/:slug*",
        destination: `${DEVELOPMENT_URL}biservice/:slug*`,
      },
      {
        source: "/AjmanUAEPass/:slug*",
        destination: `${DEVELOPMENT_URL_API}AjmanUAEPass/:slug*`,
      },
      {
        source: "/fatwa_project/:slug*",
        destination: `${DEVELOPMENT_URL_API}fatwa_project/:slug*`,
      },
      {
        source: "/social/:slug*",
        destination: `${DEVELOPMENT_URL}social/:slug*`,
      },
      {
        source: "/WorkingHoursSystem/:slug*",
        destination: `${DEVELOPMENT_URL_API}WorkingHoursSystem/:slug*`,
      },
      {
        source: "/FileGenerator/:slug*",
        destination: `${DEVELOPMENT_URL_API}FileGenerator/:slug*`,
      },
      {
        source: "/notifier/:slug*",
        destination: `${DEVELOPMENT_URL_API}notifier/:slug*`,
      },
      {
        source: "/GeneralSetting/:slug*",
        destination: `${DEVELOPMENT_URL_API}GeneralSetting/:slug*`,
      },
      { source: "/uaepass/:slug*", destination: `${UAE_PASS_URL}/:slug*` },
      {
        source: "/info-general/:slug*",
        destination: `${DEVELOPMENT_URL_API}info-general/:slug*`,
      },
      {
        source: "/new-video-call/:slug*",
        destination: `${DEVELOPMENT_URL_API}new-video-call/:slug*`,
      },
      {
        source: "/standerAPI/:slug*",
        destination: `/api/:slug*`,
      },
      {
        source: "/serverjs/:slug*",
        destination: `https://lcp02ub.infostrategic.com/:slug*`,
      },
      {
        source: "/app1/:slug*",
        destination: `${DEVELOPMENT_URL_API}app1/:slug*`,
      },
      {
        source: "/UpdateApp/:slug*",
        destination: `${DEVELOPMENT_URL_API}UpdateApp/:slug*`,
      },
      {
        source: "/realtime/:slug*",
        destination: `${DEVELOPMENT_URL_API}realtime/:slug*`,
      },
    ];
  },
};

export default nextConfig;
