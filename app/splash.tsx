import { SafeAreaView, View, Image } from 'react-native';
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
      </View>
    </SafeAreaView>
  );
}
