import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const CreatePostSection: React.FC = () => {
  return (
    <View className="relative w-[94%] max-w-[1600px] h-[333px] bg-secondary rounded-md shadow-lg mx-auto mt-[5vh]">
      <View className="flex flex-row w-[93%] items-center justify-between absolute top-[205px] left-[36px]">
        <TouchableOpacity className="flex flex-row w-[283px] items-center gap-6 py-6 relative bg-gray-light rounded-sm justify-center">
          <Image 
            source={require('../../assets/images/camera-icon.svg')}
            className="relative w-[31px] h-[29px]"
          />
          <Text className="relative w-auto mt-[-2.4px] font-medium text-gray-text text-[29px] text-center leading-normal whitespace-nowrap">
            Photo/video
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="flex flex-row w-[283px] items-center gap-6 py-6 relative bg-gray-light rounded-sm justify-center">
          <Image 
            source={require('../../assets/images/video-icon.svg')}
            className="relative w-[31px] h-[29px]"
          />
          <Text className="relative w-auto mt-[-2.4px] font-medium text-gray-text text-[29px] text-center leading-normal whitespace-nowrap">
            Live video
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="flex flex-row w-[283px] items-center gap-6 py-6 relative bg-gray-light rounded-sm justify-center">
          <Image 
            source={require('../../assets/images/checkin-icon.svg')}
            className="relative w-[31px] h-[29px]"
          />
          <Text className="relative w-auto mt-[-2.4px] font-medium text-gray-text text-[29px] text-center leading-normal whitespace-nowrap">
            Checkin
          </Text>
        </TouchableOpacity>
      </View>
      
      <Text className="absolute w-[828px] top-[57px] left-[37px] font-normal text-text-secondary text-[40px] leading-normal whitespace-nowrap">
        What's on your mind?
      </Text>
    </View>
  );
};

export default CreatePostSection; 