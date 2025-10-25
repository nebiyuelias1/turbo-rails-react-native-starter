import React, { useCallback, useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoadEvent, VisitableView, VisitProposal } from 'react-native-turbo';
import { useCurrentUrl, useWebviewNavigate } from 'react-native-web-screen';
import { useSessionHandle } from './useSessionHandle';
import { NavigationProp } from '@react-navigation/native';
import { baseURL, linkingConfig, RootStackParamList } from './webScreen';
import { openVromoOrStore, openVromoOrStoreOniOS } from './utils/navigationUtils';
import { useRootContext } from './RootContextProvider';
import { MessageType, showMessage } from 'react-native-flash-message';
import * as Linking from 'expo-linking';
import { Routes } from './routes';

export type WebViewProps = {
  navigation: NavigationProp<RootStackParamList>
}

export default function WebView({ navigation }: WebViewProps) {
  const { deviceToken, isLoggedIn, checkAuthStatus } = useRootContext();
  const isLoggedInRef = useRef<boolean>(false);

  const { navigateTo } = useWebviewNavigate();
  let currentUrl = useCurrentUrl(baseURL, linkingConfig);
  if (deviceToken) {
    currentUrl = `${currentUrl}?device_token=${deviceToken}`;
  }


  useEffect(() => {
    // if there is a change in login status logged in -> not logged in
    if (isLoggedInRef.current && !isLoggedIn) {
      navigation.reset({ index: 0, routes: [{ name: Routes.Home }] });
    }

    isLoggedInRef.current = isLoggedIn;
  }, [isLoggedIn])

  const url = Linking.useURL();
  if (url) {
    const { path, queryParams: rawQueryParams } = Linking.parse(url);
    const processedQueryParams: Record<string, string> = {};
    if (rawQueryParams) {
      for (const key in rawQueryParams) {
        if (Object.prototype.hasOwnProperty.call(rawQueryParams, key)) {
          const value = rawQueryParams[key];
          if (value) {
            processedQueryParams[key] = value.toString();
          }
        }
      }
    }

    const queryString = new URLSearchParams(processedQueryParams).toString();

    currentUrl = `${baseURL}/${path}${queryString ? `?${queryString}` : ''}`;
  }

  const sessionHandle = useSessionHandle();

  const onVisitProposal = useCallback(
    async ({ action: actionType, url }: VisitProposal) => {
      navigateTo(url, actionType);
    },
    [navigation]
  );

  const onLoad = useCallback(
    async ({ title, url }: LoadEvent) => {
      navigation.setOptions({ title })
      await checkAuthStatus();
    },
    [navigation]
  );

  const onMessage = useCallback(
    (event: any) => {
      const data: {
        eventType: string;
        data: { type: string; message: string };
      } = event;

      if (data.eventType === "flash") {
        const messageType: MessageType =
          {
            notice: "success" as MessageType,
            alert: "danger" as MessageType,
            error: "danger" as MessageType,
            info: "info" as MessageType,
          }[data.data.type] || "default";
        showMessage({
          message: data.data.message,
          type: messageType,
          duration: 3000,
          animated: true,
          icon: "auto",
        });
      }
    },
    []
  );

  return (
    <View style={styles.container}>
      <VisitableView
        url={currentUrl}
        sessionHandle={sessionHandle}
        applicationNameForUserAgent="Turbo Native"
        onVisitProposal={onVisitProposal}
        style={styles.visitableView}
        onError={(error) => console.error("onError", error)}
        onLoad={onLoad}
        onMessage={onMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  visitableView: {
    flex: 1,
  },
});
