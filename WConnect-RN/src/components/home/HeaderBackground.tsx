import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HeaderBackground: React.FC = () => {
  return (
    <View className="absolute top-0 left-0 w-full h-[41vh] z-[-1] overflow-hidden">
      <View className="relative w-full h-full overflow-hidden">
        <Image
          source={require('../../assets/images/profile-background.jpg')}
          className="absolute w-full h-[99%] object-cover"
          style={styles.image}
        />
        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0)',
            'rgba(255, 255, 255, 0.2)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 0.85)',
            'rgba(255, 255, 255, 0.95)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)'
          ]}
          style={styles.gradient}
          pointerEvents="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    opacity: 0.75, // equivalent to filter: brightness(0.75)
  },
  gradient: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: '25%',
  }
});

export default HeaderBackground; 