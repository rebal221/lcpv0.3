export { };

declare global {
  interface Window {
    breadcrumbs: Array<{ [key: string]: any }>;
    pushBreadPath: any;
    clearBreadcrumbs: any;
    localTimezone: any;
    encrypt: any;
    decrypt: any;
    loginMethods: any;
    platform: { dummyToken: any, visitorData: any };
  }
}
