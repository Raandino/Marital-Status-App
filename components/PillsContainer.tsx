import { View, ScrollView } from 'react-native';
import type { PillType } from '@/types/pills';
import Pill from './Pill';

type Props = {
  Pills: PillType[];
};

export default function PillsContainer({ Pills }: Props) {
  return (
    <ScrollView className="w-full ">
      {Pills.map((pill, index) => {
        const isFirst = index === 0;
        const isLast = index === Pills.length - 1;

        return (
          <View
            key={index}
            className={`${
              isFirst ? 'mb-1.5' : isLast ? 'mt-1.5' : 'mt-1.5 mb-1.5'
            }`}>
            <Pill
              title={pill.description}
              handlePress={pill.handlePress}
              selected={pill.selected}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}
