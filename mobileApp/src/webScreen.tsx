import { Routes } from "@/src/routes";
import { getLinkingObject, LinkingConfig } from "react-native-web-screen";

export type RootStackParamList = {
  [Routes.Home]: { path: string };
};

export const linkingConfig: LinkingConfig = {
  screens: {
    [Routes.Home]: {
      screens: {
        [Routes.WebviewInitial]: "",
      },
    },
    [Routes.Fallback]: "*",
  },
};
// export const baseURL = process.env.BASE_URL || "http://10.0.2.2:3000";
export const baseURL = "http://10.0.2.2:3000";
export const linking = getLinkingObject(baseURL, linkingConfig);
