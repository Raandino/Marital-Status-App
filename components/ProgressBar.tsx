import { View } from 'react-native';

type Props = {
  progress: string;
};

export default function ProgressBar({ progress }: Props) {
  return (
    <View className="w-[179px] h-[6px] bg-neutral-2 relative rounded-full overflow-hidden">
      <View className={`h-full w-[15%] bg-appBlue rounded-full`} />
    </View>
  );
}
