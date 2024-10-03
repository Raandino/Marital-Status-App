import { Text, Pressable, SafeAreaView, ActivityIndicator } from 'react-native';

type Props = {
  title: string;
  handlePress: () => void;
  disabled: boolean;
  isLoading?: boolean;
};

export default function Button({
  title,
  handlePress,
  disabled,
  isLoading,
}: Props) {
  return (
    <Pressable
      onPress={handlePress}
      className={`rounded-full bg-primary active:bg-primary-dark w-[327px] h-[52px] flex justify-center items-center ${disabled ? 'bg-neutral-2' : ''}`}>
      {!isLoading && (
        <Text className="text-white font-osbold px-6 py-4 text-base">
          {title}
        </Text>
      )}

      {isLoading && (
        <SafeAreaView className="flex-1 justify-center items-center">
          <ActivityIndicator size="small" color="#fff" />
        </SafeAreaView>
      )}
    </Pressable>
  );
}
