import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useWebviewNavigate } from 'react-native-web-screen';
import { baseURL } from './webScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomDrawerContent = () => {
  const { navigateTo } = useWebviewNavigate();

  return (
    <DrawerContentScrollView>
      <View style={styles.brandingContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        {/* TODO: Use title from env variable */}
        <Text style={styles.brandingText}>Turbo Rails</Text>
      </View>

      <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }} />

      <DrawerItem
        label="Profile"
        icon={({ color, size }) => <Ionicons name="person" color={color} size={size} />}
        onPress={() => navigateTo(`${baseURL}/users/profile`, "advance")}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  brandingContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  brandingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
