import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomNav from '../components/BottomNav';
import HomeHeader from '../components/HomeHeader';

const { width } = Dimensions.get('window');

const movies: { id: string; image: ImageSourcePropType }[] = [
  { id: '1', image: require('../assets/pitcher1.png') },
  { id: '2', image: require('../assets/Moviephoto.jpg') },
  { id: '3', image: require('../assets/Moviephoto.jpg') },
  { id: '4', image: require('../assets/Moviephoto.jpg') },
  { id: '5', image: require('../assets/Moviephoto.jpg') },
  { id: '6', image: require('../assets/Moviephoto.jpg') },
  { id: '7', image: require('../assets/Moviephoto.jpg') },
  { id: '8', image: require('../assets/Moviephoto.jpg') },
  { id: '9', image: require('../assets/Moviephoto.jpg') },
  { id: '10', image: require('../assets/Moviephoto.jpg') },
];

const categories = [
  {
    title: 'Romance',
    data: movies,
  },
  {
    title: 'Sci-fi',
    data: movies,
  },
];

type MovieCardProps = {
  image: ImageSourcePropType;
};

const MovieCard = ({ image }: MovieCardProps) => (
  <View style={styles.movieCard}>
    <Image source={image} style={styles.poster} />
    <Text style={styles.movieTitle}>Name of Drama</Text>
    <View style={styles.tagRow}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>Romance</Text>
      </View>
      <Text style={styles.duration}>2.3M</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  const navigation: any = useNavigation();

  const handleOpenReels = (id: string) => {
    navigation.navigate('ReelScreen' as never, { movieId: id } as never);
  };

  return (
    <View style={styles.container}>
      <HomeHeader />

      <View style={styles.tabRow}>
        <Text style={styles.tabText}>Popular</Text>
        <Text style={styles.tabText}>New</Text>
        <Text style={[styles.tabText, { color: '#ff4d67' }]}>Categories*</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
        {categories.map((category) => {
          const midpoint = Math.ceil(category.data.length / 2);
          const row1 = category.data.slice(0, midpoint);
          const row2 = category.data.slice(midpoint);

          return (
            <View key={category.title}>
              <View style={styles.categoryHeader}>
                <Text style={styles.sectionTitle}>{category.title}</Text>
                <View style={styles.viewAllRow}>
                  <Text style={styles.viewAll}>View all</Text>
                  <Image source={require('../assets/arrow-right.png')} style={styles.arrowIcon} />
                </View>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.rowContainer}>
                  {row1.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => handleOpenReels(item.id)}
                      activeOpacity={0.85}
                      delayPressIn={0}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <MovieCard image={item.image} />
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.rowContainer}>
                  {row2.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => handleOpenReels(item.id)}
                      activeOpacity={0.85}
                      delayPressIn={0}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <MovieCard image={item.image} />
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>

      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0808ff',
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#0a0808ff',
  },
  tabText: {
    color: '#ccc',
    fontSize: 15,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 3,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  viewAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAll: {
    color: '#aaa',
    fontSize: 13,
  },
  arrowIcon: {
    width: 12,
    height: 12,
    tintColor: '#aaa',
    marginLeft: 4,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 15,
    gap: 12,
  },
  movieCard: {
    backgroundColor: '#252525',
    marginRight: 12,
    borderRadius: 8,
    width: 130,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  poster: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    marginHorizontal: 6,
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginHorizontal: 6,
    justifyContent: 'space-between',
  },
  tag: {
    backgroundColor: '#ff4d67',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  tagText: {
    color: '#fff',
    fontSize: 9,
  },
  duration: {
    color: '#ccc',
    fontSize: 9,
  },
});

export default HomeScreen;
