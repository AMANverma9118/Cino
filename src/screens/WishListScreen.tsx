import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Menu, MenuItem } from 'react-native-material-menu';
import BottomNav from '../components/BottomNav';

const wishlistData = [
  {
    id: '1',
    title: 'From the Ashes',
    genre: 'Romance Comedy',
    description: 'A tyrannical sultan attacks a prosperous kingdom to capture a beautiful queen in medieval period..........',
    image: require('../assets/pitcher1.png'),
    views: '2.5 M',
  },
  {
    id: '2',
    title: 'From the Ashes',
    genre: 'Romance Comedy',
    description: 'A tyrannical sultan attacks a prosperous kingdom to capture a beautiful queen in medieval period..........',
    image: require('../assets/pitcher2.png'),
    views: '2.5 M',
  },
  {
    id: '3',
    title: 'From the Ashes',
    genre: 'Romance Comedy',
    description: 'A tyrannical sultan attacks a prosperous kingdom to capture a beautiful queen in medieval period..........',
    image: require('../assets/pitcher3.png'),
    views: '2.5 M',
  },
  {
    id: '4',
    title: 'From the Ashes',
    genre: 'Romance Comedy',
    description: 'A tyrannical sultan attacks a prosperous kingdom to capture a beautiful queen in medieval period..........',
    image: require('../assets/pitcher4.jpg'),
    views: '2.5 M',
  },
];

const WishlistScreen = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [wishlist, setWishlist] = useState(wishlistData);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const hideMenu = () => setMenuVisible(false);
  const showMenu = () => setMenuVisible(true);

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.views}>{item.views}</Text>
        </View>
        <Text style={styles.genre}>{item.genre}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Wishlist</Text>
        <Menu
          visible={menuVisible}
          style={styles.dropdowncolor}
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <Image source={require('../assets/dotMenu.png')} style={styles.menuIcon} />
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}
        >
          <MenuItem onPress={() => {
            hideMenu();
            setShowConfirmModal(true);
          }}>
            <Text style={{ color: '#fff' }}>Clear wishlist</Text>
          </MenuItem>
          <MenuItem onPress={hideMenu}>
            <Text style={{ color: '#fff' }}>Download all</Text>
          </MenuItem>
        </Menu>
      </View>

      <View style={styles.divider} />

      <FlatList
        data={wishlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <BottomNav />

      {/* Modal */}
      <Modal
        transparent
        visible={showConfirmModal}
        animationType="fade"
        onRequestClose={() => setShowConfirmModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to <Text style={{ fontWeight: 'bold', color: 'red' }}>remove</Text> videos from wishlist?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.yesButton}
                onPress={() => {
                  setWishlist([]); // clear wishlist
                  setShowConfirmModal(false);
                }}
              >
                <Text style={styles.buttonText}>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.noButton}
                onPress={() => setShowConfirmModal(false)}
              >
                <Text style={styles.buttonText}>NO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 45,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'inter'
  },
  dropdowncolor: {
    backgroundColor: 'rgba(38, 37, 37, 1)',
  },
  menuIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  divider: {
    height: 1.2,
    backgroundColor: '#fe2157',
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 18,
  },
  image: {
    width: 100,
    height: 160,
    borderRadius: 6,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 19,
    color: '#fff',
    fontWeight: '600',
  },
  views: {
    fontSize: 12,
    color: '#aaa',
  },
  genre: {
    color: 'rgba(146, 136, 136, 1)',
    fontSize: 15,
    marginVertical: 6,
  },
  description: {
    color: 'rgba(146, 136, 136, 1)',
    fontSize: 13,
    paddingTop: 8
  },
  modalOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modalContent: {
    backgroundColor: '#1e1e1e',
    padding: 25,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  yesButton: {
    backgroundColor: '#9f1d2c',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  noButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WishlistScreen;
