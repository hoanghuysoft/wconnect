import React from 'react';
import { View, Text } from 'react-native';

const WelcomeSection: React.FC = () => {
  return (
    <View className="flex flex-col w-[94%] max-w-[1600px] items-start mx-auto mt-[18vh] gap-[15px] relative">
      <Text className="font-medium text-white text-[64px] leading-normal m-0">
        Good morning, Tai!
      </Text>
      <Text className="font-normal text-white text-[32px] leading-normal m-0 relative">
        You got 36 unread messages from your friends. Go and check it out!
      </Text>
    </View>
  );
};

export default WelcomeSection; 