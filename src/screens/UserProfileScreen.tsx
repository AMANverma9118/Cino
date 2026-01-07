import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import BottomNav from '../components/BottomNav';
import LinearGradient from 'react-native-linear-gradient';

const movies = [
  require('../assets/Moviephoto.jpg'),
  require('../assets/Moviephoto.jpg'),
  require('../assets/Moviephoto.jpg'),
  require('../assets/Moviephoto.jpg'),
];

const downloads = [
  require('../assets/Moviephoto.jpg'),
  require('../assets/Moviephoto.jpg'),
  require('../assets/Moviephoto.jpg'),
  require('../assets/Moviephoto.jpg'),
];

const UserProfileScreen = ({ navigation }: { navigation: NativeStackNavigationProp<any> }) => (
  <View style={styles.container}>
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
      style={styles.topSection}
    >
      <View style={styles.avatarCircle}>
        <Image
          source={require('../assets/Aman-5.jpg')}
          style={styles.avatarImage}
        />
      </View>
      <TouchableOpacity
        style={styles.penIconContainer}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Image
          source={require('../assets/editPencil.png')}
          style={styles.penIcon}
        />
      </TouchableOpacity>
      <Text style={styles.userName}>User_name</Text>
      <Text style={styles.email}>abc123@gmail.com</Text>
    </LinearGradient>
    {/* Bottom Section */}
    <View style={styles.profileSection}>
      <Text style={styles.sectionTitle}>Profile</Text>

      {/* Login ID */}
      <View style={styles.row}>
        <Image source={require('../assets/login.png')} style={styles.icon} />
        <Text style={styles.rowText}>Login Id</Text>
        <Text style={styles.rowSubText}>abc123@gmail.com</Text>
      </View>

      {/* Watch History */}
      <Text style={styles.subSectionTitle}>Watch History</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {movies.map((img, i) => (
          <Image key={i} source={img} style={styles.movieImage} />
        ))}
      </ScrollView>

      {/* Downloads */}
      <Text style={styles.subSectionTitle}>Downloads</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {downloads.map((img, i) => (
          <Image key={i} source={img} style={styles.movieImage} />
        ))}
      </ScrollView>

      {/* Delete Account */}
      <TouchableOpacity style={styles.row}>
        <Image source={require('../assets/trash.png')} style={styles.icon} />
        <Text style={styles.rowText}>Delete Account</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.row}>
        <Image source={require('../assets/logout.png')} style={styles.icon} />
        <Text style={styles.rowText}>Log out</Text>
      </TouchableOpacity>
    </View>

    {/* Bottom Nav */}
    <BottomNav />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(65, 9, 6, 1)',
    borderBottomEndRadius: 50
  },
  topSection: {
    paddingTop: 40,
    alignItems: 'center',
    paddingBottom: 20,
  },
  penIconContainer: {
    position: 'absolute',
    right: 120,
    bottom: 80,
    backgroundColor: '#a92929ff',
    borderRadius: 16,
    padding: 2,
    borderWidth: 2,
    borderColor: '#ff4d67',
  },
  penIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff4d67',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    marginBottom: 10,
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  email: {
    color: '#ccc',
    fontSize: 13,
  },
  profileSection: {
    flex: 1,
    backgroundColor: '#0a0808ff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subSectionTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  rowText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
  rowSubText: {
    color: '#aaa',
    fontSize: 12,
    marginLeft: 'auto',
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  movieImage: {
    width: 90,
    height: 140,
    borderRadius: 8,
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  bottomNav: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navIcon: {
    width: 22,
    height: 22,
    tintColor: '#fff',
  },
});

export default UserProfileScreen;
