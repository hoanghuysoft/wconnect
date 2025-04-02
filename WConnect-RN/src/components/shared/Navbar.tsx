import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Navbar: React.FC = () => {
  return (
    <View className="sticky top-6 w-[94%] max-w-[1600px] h-[95px] mx-auto flex flex-row justify-between items-center z-10">
      <Text className="font-bold text-primary text-[54px] leading-[22px]">WConnect</Text>
      
      <View className="flex flex-row items-center gap-6 flex-1 justify-end h-full">
        <View className="relative w-[544px] h-[95px] flex items-center">
          <View className="relative w-full h-[95px]">
            <View className="relative w-full h-[95px] bg-[rgba(217,217,217,0.3)] rounded-full border border-white backdrop-blur-md flex items-center">
              <Text className="absolute left-[34px] font-normal text-[#d0d0d0] text-[29px] leading-[39px]">
                Search for posts, friends and more
              </Text>
            </View>
          </View>
          <TouchableOpacity className="absolute right-0 w-[98px] h-[95px] top-0 bg-secondary rounded-full flex items-center justify-center">
            <Image source={require('../../assets/images/search-icon.svg')} />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity className="relative w-[98px] h-[95px] bg-secondary rounded-full flex items-center justify-center">
          <Image source={require('../../assets/images/notification-icon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar; 