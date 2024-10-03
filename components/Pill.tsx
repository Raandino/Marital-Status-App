import { Text, Pressable, View } from 'react-native';

type Props = {
  title: string;
  handlePress: () => void;
  selected: boolean;
};

export default function Pill({ title, handlePress, selected }: Props) {
  return (
    <Pressable
      onPress={handlePress}
      className={` rounded-xl flex-row justify-between bg-white w-full h-[56px] flex items-center px-4 py-4 text-[14px] border-[1px] border-neutral-1 ${
        selected ? ' border-primary bg-secondary' : ''
      }`}>
      <Text className="text-tertiary text-start font-ossemibold text-base w-[80%]">
        {title}
      </Text>
      <View
        className={`flex justify-center items-center h-6 w-6 rounded-full border-[1px] border-neutral-1 ${
          selected ? ' bg-primary' : ''
        }`}>
        {selected && (
          <View className="h-[10px] w-[10px] bg-white rounded-full" />
        )}
      </View>
    </Pressable>
  );
}
