import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'HomeScreen', label: 'Home', icon: require('../assets/Home.png') },
    { name: 'ReelScreen', label: 'Reel', icon: require('../assets/Reel.png') },
    { name: 'WishList', label: 'Wishlist', icon: require('../assets/WishList.png') },
    { name: 'UserProfile', label: 'Profile', icon: require('../assets/ProfileIcon.png') },
  ];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => {
        const isActive = route.name === tab.name;

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => navigation.navigate(tab.name as never)}
          >
            <Image
              source={tab.icon}
              style={[styles.icon, { tintColor: isActive ? '#ff4d67' : '#fff' }]}
            />
            <Text style={[styles.navText, { color: isActive ? '#ff4d67' : '#fff' }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0a0808ff',
    paddingVertical: 16,
    // borderTopWidth: 1,
    // borderTopColor: '#222',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, marginTop: 4 },
  icon: { width: 28, height: 28 },
});

export default BottomNav;
