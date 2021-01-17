import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Updates from 'expo-updates';

SplashScreen.hideAsync().catch(() => {});

export default function App() {

  handleForceUpdate = async () => {
    await Updates.fetchUpdateAsync();
    await Updates.reloadAsync();
  }

  return (
    <View style={styles.container}>
      <Text>Release: {Updates.manifest.revisionId}</Text>
      <Button onPress={handleForceUpdate} title="Force Update" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
