import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import {
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";

import WebView from "./WebView";
import { Routes } from "./routes";
import { linking } from "./webScreen";
import CustomDrawerContent from "./CustomDrawerContent";
import { RootContextProvider, useRootContext } from "./RootContextProvider";
import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const getId = (params: any) => JSON.stringify(params);

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const { isLoggedIn } = useRootContext();
  const drawerScreenOptions: DrawerNavigationOptions = {}

  if (!isLoggedIn) {
    drawerScreenOptions.headerLeft = () => null
  }

  return (
    <Drawer.Navigator drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen
        name={Routes.WebviewInitial}
        component={WebView}
        options={drawerScreenOptions}
      />
    </Drawer.Navigator>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RootContextProvider>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name={Routes.Home}
            getId={getId}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name={Routes.Fallback}
            getId={getId}
            component={WebView}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="bottom" />
    </RootContextProvider>
  );
}
