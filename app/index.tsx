import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  Image,
  Alert,
  Pressable,
} from 'react-native';
import Button from '@/components/Button';
import images from '@/constants/images';
import icons from '@/constants/icons';
import encodeCredentials from '@/utils/encodeCredentials';
import { router } from 'expo-router';
import { useAuth } from '@/context/AuthContext'; // Import useAuth

export default function SignInScreen() {
  const { setToken } = useAuth(); // Access the setToken function from context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await fetch(
        'https://api-sandbox.lafise.com/oauth2/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            accept: 'application/json',
            authorization: `Basic ${encodeCredentials(username, password)}`,
          },
          body: new URLSearchParams({
            grant_type: 'client_credentials',
          }).toString(),
        },
      );

      const result = await response.json();

      if (response.ok) {
        setToken(result.access_token);
        router.replace('/form');
      } else {
        Alert.alert(
          'Error',
          result.error_description || 'Authentication Failed',
        );
      }
    } catch (error) {
      Alert.alert('Error', error?.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white">
      <View className="h-full items-center flex justify-between overflow-hidden px-6">
        <View className="flex gap-3 w-full flex-auto justify-center items-center ">
          <Image
            className="w-12 h-12"
            resizeMode="contain"
            source={images.profile}
          />
          <Text className="text-2xl text-primary-dark font-osbold text-center mb-6">
            ¡Bienvenido!
          </Text>
          <View className="w-full">
            <Text className="text-sm mb-1 text-tertiary font-ossemibold text-start self-start">
              Usuario
            </Text>
            <View className="w-full rounded-[12px] p-[12px] font-ossemibold text-[14px] text-tertiary border-[1px] border-neutral-1 relative focus:border-primary-dark flex-row justify-between">
              <TextInput
                placeholder=""
                value={username}
                onChangeText={setUsername}
                placeholderTextColor="#181b25c4"
                selectionColor="#016048"
                className="w-[90%]"
              />
            </View>
          </View>

          <View className="w-full">
            <Text className="text-sm mb-1 text-tertiary font-ossemibold text-start self-start">
              Contraseña
            </Text>
            <View className="w-full rounded-[12px] p-[12px] font-ossemibold text-[14px] text-tertiary border-[1px] border-neutral-1 relative focus:border-primary-dark flex-row justify-between">
              <TextInput
                placeholder=""
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholderTextColor="#181b25c4"
                selectionColor="#016048"
                className="w-[90%]"
              />
              <Pressable
                onPress={() => {
                  setShowPassword(!showPassword);
                }}>
                <Image
                  className="w-6 h-6"
                  resizeMode="contain"
                  source={!showPassword ? icons.eye : icons.eyeHide}
                />
              </Pressable>
            </View>
          </View>
        </View>

        <View className="pt-4  border-t-[1px] border-neutral-1 w-full flex items-center justify-center">
          <Button
            title="Continuar"
            handlePress={handleSignIn}
            disabled={false}
            isLoading={loading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
