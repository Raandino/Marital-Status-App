import { View } from 'react-native';

type Props = {
  progress: string;
};

export default function ProgressBar({ progress }: Props) {
  return (
    <View className="w-[179px] h-[6px] bg-neutral-2 rounded-full overflow-hidden">
      <View className={`h-full w-[${progress}%] bg-appBlue rounded-full`} />
    </View>
  );
}
