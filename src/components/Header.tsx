import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('UserProfile'); // Navigates to UserProfileScreen
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBack}>
        <Image
          source={require('../assets/backLogo.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>edit Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 },
  icon: { width: 30, height: 30, tintColor: '#f2eaecff' },
  headerText: { color: '#f1ebecff', fontSize: 18, marginLeft: 2, fontWeight: 'bold', fontFamily: 'YourCustomFont' },
});

export default Header;