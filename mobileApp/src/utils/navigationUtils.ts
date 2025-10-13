import { Linking } from "react-native";

export async function openVromoOrStore() {
  const packageName = "com.fleeteng.spatulago";
  const url = `market://details?id=${packageName}`; // Fallback to the app on Play Store if not installed
  const canOpen = await Linking.canOpenURL(`intent://${packageName}`);
  if (canOpen) {
    await Linking.openURL(`intent://${packageName}`);
  } else {
    // If the app is not installed, open Play Store
    await Linking.openURL(url);
  }
}

export async function openVromoOrStoreOniOS() {
  const url = "https://apps.apple.com/us/app/vromo/id1512309654";
  await Linking.openURL(url);
}
