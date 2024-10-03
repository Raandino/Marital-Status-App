import { View, Image } from 'react-native';
import icons from '@/constants/icons';
import ProgressBar from './ProgressBar';

export default function FormHeader() {
  return (
    <View
      className="w-full h-11 px-6 flex items-center justify-center flex-row "
      style={{ position: 'relative' }}>
      <Image
        className="w-5 h-5 absolute left-[24px]"
        resizeMode="contain"
        source={icons.plus}
      />

      <ProgressBar progress="10" />
    </View>
  );
}
