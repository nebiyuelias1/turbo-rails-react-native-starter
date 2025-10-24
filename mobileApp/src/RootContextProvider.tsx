import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
// import messaging from "@react-native-firebase/messaging";
import { Platform, PermissionsAndroid, Alert } from "react-native"; interface RootContextProps {
  deviceToken: string | null;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const RootContext = createContext<RootContextProps | undefined>(
  undefined
);

interface RootContextProviderProps {
  children: React.ReactNode;
}

// Register background handler
// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   console.log("Message handled in the background!", remoteMessage);
// });

export const RootContextProvider: React.FC<RootContextProviderProps> = ({
  children,
}) => {
  const [deviceToken, setDeviceToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const getCookie = async () => {
      try {
        // TODO: Get this key for the cookie from .env variable
        const response = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/api/v1/auth/check`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        const authenticated = data['authenticated'];
        console.log('the response: ', data);
        setIsLoggedIn(authenticated);
      } catch (e) {
        console.error('error', e);
      }
    }
    getCookie();
    // const requestUserPermission = async () => {
    //   if (Platform.OS === "android") {
    //     await PermissionsAndroid.request(
    //       PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    //     );
    //   }
    // };
    //
    // const getDeviceToken = async () => {
    //   const token = await messaging().getToken();
    //   setDeviceToken(token);
    // };
    //
    // requestUserPermission().then(getDeviceToken);
    //
    // const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    //   if (
    //     remoteMessage.notification?.title &&
    //     remoteMessage.notification?.body
    //   ) {
    //     Alert.alert(
    //       remoteMessage.notification.title,
    //       remoteMessage.notification.body
    //     );
    //   }
    // });
    //
    // return unsubscribe;
  }, []);

  return (
    <RootContext.Provider
      value={{ deviceToken, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </RootContext.Provider>
  );
};

export const useRootContext = (): RootContextProps => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useDeviceToken must be used within a DeviceTokenProvider");
  }
  return context;
};
