import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { checkAuth } from './utils/auth';

interface RootContextProps {
  deviceToken: string | null;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  checkAuthStatus: () => Promise<void>;
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
    (async () => {
      const isAuthenticated = await checkAuth();
      setIsLoggedIn(isAuthenticated);
    })();
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


  const checkAuthStatus = async () => {
    const isAuthenticated = await checkAuth();
    setIsLoggedIn(isAuthenticated);
  }

  return (
    <RootContext.Provider
      value={{ deviceToken, isLoggedIn, setIsLoggedIn, checkAuthStatus }}
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
