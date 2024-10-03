import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import PillsContainer from '@/components/PillsContainer';
import type { PillType } from '@/types/pills';
import Button from '@/components/Button';
import { useAuth } from '@/context/AuthContext';
import icons from '@/constants/icons';
import FormHeader from '@/components/FormHeader';
import { router } from 'expo-router';

export default function Form() {
  const { token } = useAuth();

  const [maritalStatusOptions, setMaritalStatusOptions] = useState<PillType[]>(
    [],
  );
  const [selectedPillIndex, setSelectedPillIndex] = useState<number | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = () => {
    if (selectedPillIndex !== null) {
      router.replace('/end');
    } else {
      Alert.alert('Error', 'Please select a marital status.');
    }
  };

  const handlePillPress = (index: number) => {
    setSelectedPillIndex(index);
  };

  useEffect(() => {
    const fetchMaritalStatus = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 10));

        const response = await fetch(
          'https://api-sandbox.lafise.com/obl/v2/banks/BLNI/catalogs/MaritalStatus/detail',
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              authorization: `Bearer ${token}`,
              'x-api-key': 'G3yCDUD91N4nW6YghwTdjJoA32gauL36pq2mWZH1',
            },
          },
        );

        if (!response.ok) {
          throw new Error('Failed to fetch marital status data');
        }

        const data = await response.json();
        setMaritalStatusOptions(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      setIsLoading(true);
      fetchMaritalStatus();
    } else {
      setError('No authentication token available');
      setIsLoading(false);
    }
  }, [token]);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#018765" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <Text>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-white ">
      <View className="h-full items-center flex justify-between overflow-hidden ">
        <FormHeader />
        <Text className="text-tertiary font-osbold text-base text-center">
          Completa tu perfil
        </Text>
        <View className="flex flex-col  w-full px-6 pt-3 gap-2">
          <Image
            className=" w-[72px] h-[72px] "
            resizeMode="contain"
            source={icons.maritalStatus}
          />
          <Text className="text-tertiary text-start font-osbold text-2xl py-3">
            ¿Cuál es tu estado civil?
          </Text>
        </View>
        <View className="flex flex-col w-full flex-auto justify-start items-center px-6 pt-4">
          <PillsContainer
            Pills={maritalStatusOptions.map((option, index) => ({
              description: option.description,
              handlePress: () => handlePillPress(index),
              selected: selectedPillIndex === index,
            }))}
          />
        </View>

        <View className="pt-4  border-t-[1px] border-neutral-1 w-full flex items-center justify-center">
          <Button
            title="Continuar"
            handlePress={handleFormSubmit}
            disabled={selectedPillIndex === null}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
