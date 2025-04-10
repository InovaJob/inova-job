import "reflect-metadata";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index/index" options={{ headerShown: false }} />
        <Stack.Screen name='login_screen/login-screen' options={{ headerShown: false }} />
        <Stack.Screen name='register/register_step1/register_step1' options={{ headerShown: false }} />
        <Stack.Screen name='register/register_step2/register_step2' options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={"light"} backgroundColor='transparent' />
    </ThemeProvider>
  );
}