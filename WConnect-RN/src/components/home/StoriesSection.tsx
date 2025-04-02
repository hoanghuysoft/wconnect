import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const StoryCard: React.FC = () => {
  return (
    <View className="w-[260px] h-[425px] relative flex-none">
      <Image
        source={require('../../assets/images/profile-background.jpg')}
        className="absolute object-cover rounded-md w-full h-full"
      />
      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0)',
          'rgba(0, 0, 0, 0.7)'
        ]}
        style={styles.overlay}
        className="w-full h-full absolute rounded-sm"
      />
      <View className="w-[181px] left-[40px] top-[245px] absolute flex-col justify-start items-center gap-[15px]">
        <Image source={require('../../assets/images/add-story-icon.png')} />
        <Text className="text-white text-[26px] font-medium text-center">
          Create your story
        </Text>
      </View>
    </View>
  );
};

const StoriesSection: React.FC = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="relative h-[425px] w-[94%] max-w-[1600px] mx-auto mt-[5vh] flex gap-[47px] scroll-smooth px-[3%]"
    >
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    maskImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.01) 7%, rgba(255, 255, 255, 0.04) 13%, rgba(255, 255, 255, 0.08) 20%, rgba(255, 255, 255, 0.15) 27%, rgba(255, 255, 255, 0.23) 33%, rgba(255, 255, 255, 0.33) 40%, rgba(255, 255, 255, 0.44) 47%, rgba(255, 255, 255, 0.56) 53%, rgba(255, 255, 255, 0.67) 60%, rgba(255, 255, 255, 0.77) 67%, rgba(255, 255, 255, 0.85) 73%, rgba(255, 255, 255, 0.92) 80%, rgba(255, 255, 255, 0.96) 87%, rgba(255, 255, 255, 0.99) 93%, white 100%)'
  }
});

export default StoriesSection; 