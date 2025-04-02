import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../components/shared/Navbar';
import HeaderBackground from '../components/home/HeaderBackground';
import WelcomeSection from '../components/home/WelcomeSection';
import CreatePostSection from '../components/home/CreatePostSection';
import StoriesSection from '../components/home/StoriesSection';
import PostFeed from '../components/home/PostFeed';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderBackground />
      <ScrollView className="flex-1">
        <Navbar />
        <WelcomeSection />
        <CreatePostSection />
        <StoriesSection />
        <PostFeed />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen; 