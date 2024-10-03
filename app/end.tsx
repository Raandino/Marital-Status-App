import { SafeAreaView, View, Image, Text } from 'react-native';
import images from '@/constants/images';

export default function Splash() {
  return (
    <SafeAreaView className="bg-primary">
      <View className=" h-full flex justify-center items-center">
        <Image
          className=" w-56 -translate-y-2"
          resizeMode="contain"
          source={images.logo}
        />
        <Text className="text-2xl text-white font-ossemibold text-center mb-6">
          ¡Gracias!
        </Text>
      </View>
    </SafeAreaView>
  );
}
