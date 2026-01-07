import { StyleSheet, TextInput, View,Image } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native';


const HomeHeader = () => {
  return (
    <View style={styles.header}>
            <Pressable>
              <Image source={require('../assets/menu.png')} style={styles.icon} />
            </Pressable>
            <View style={styles.searchBarContainer}>
              <Image
                source={require('../assets/search.png')}
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="Search here"
                placeholderTextColor="#aaa"
                style={styles.searchBar}
              />
            </View>
            <Pressable>
              <Image source={require('../assets/bell.png')} style={styles.icon} />
            </Pressable>
          </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: '#0a0808ff',
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#743131ff',
  },
  icon: { width: 24, height: 24, tintColor: '#fff', marginHorizontal: 5 },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#390f0fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    height: 40,
  },
  searchIcon: {
    width: 18,
    height: 18,
    tintColor: '#aaa',
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    color: '#fff',
    paddingVertical: 0,
    fontSize: 14,
  },
})