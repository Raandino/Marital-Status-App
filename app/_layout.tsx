import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import Splash from './splash';
import { useState } from 'react';
import { AuthProvider } from '@/context/AuthContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Open-Sans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'Open-Sans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
  });

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      const prepareApp = async () => {
        await SplashScreen.hideAsync();
        setTimeout(() => {
          setIsAppReady(true);
        }, 2000);
      };

      prepareApp();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded || !isAppReady) {
    return <Splash />;
  }

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="form" options={{ headerShown: false }} />
        <Stack.Screen name="end" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
