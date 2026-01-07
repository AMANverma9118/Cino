import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileAvatar = () => {
  const [avatar, setAvatar] = useState(require('../assets/Aman-5.jpg'));

  const handleEditAvatar = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 0.8 },
      (response) => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert('Error', 'Could not select image');
          return;
        }
        if (response.assets && response.assets.length > 0) {
          setAvatar({ uri: response.assets[0].uri });
        }
      }
    );
  };

  return (
    <View style={styles.avatarContainer}>
      <TouchableOpacity style={styles.avatarCircle} onPress={handleEditAvatar}>
        <Image
          source={avatar}
          style={styles.avatarImage}
        />
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: { alignItems: 'center', marginTop: 30 },
  avatarCircle: {
    width: 120, height: 120, borderRadius: 60,
    borderWidth: 2, borderColor: '#0b0b0bff',
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: 'rgba(56, 29, 29, 0.05)',
    position: 'relative',
  },
  avatarImage: {
    width: 120, height: 120, borderRadius: 60, resizeMode: 'cover', borderWidth: 2, borderColor: "#d01414ff"
  }
});

export default ProfileAvatar;