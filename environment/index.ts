import { vars } from "./vars";

export const isDev = () => process.env.NODE_ENV === "development";
export const isStaging = () =>
  process.env.NODE_ENV === "production" &&
  vars.NEXT_PUBLIC_APP_ENV === "staging";
export const isProduction = () =>
  process.env.NODE_ENV === "production" &&
  vars.NEXT_PUBLIC_APP_ENV === "production";
