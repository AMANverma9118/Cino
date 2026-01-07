import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import ProfileAvatar from '../components/ProfileAvatar';
import ProfileForm from '../components/ProfileForm';
import BottomNav from '../components/BottomNav';

const EditProfileScreen = () => (
  <LinearGradient
    colors={[
    'rgba(75, 6, 2, 1)',
    'rgba(56, 18, 11, 1)',
    'rgba(76, 14, 2, 1)',
    'rgba(113, 22, 4, 1)',
    'rgba(106, 4, 29, 1)',
  ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
    <Header />
    <ProfileAvatar />
    <ProfileForm />
    <BottomNav />
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default EditProfileScreen;
