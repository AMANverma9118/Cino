import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

const dummyData = [
  {
    id: '1',
    title: 'Name of Drama',
    genre: 'Genre',
    views: '2.3 M',
    image: require('../assets/pitcher1.png'),
  },
  {
    id: '2',
    title: 'Name of Drama',
    genre: 'Genre',
    views: '2.3 M',
    image: require('../assets/pitcher2.png'),
  },
  // Add more dummy items here
];

type CategoryPageProps = NativeStackScreenProps<any, 'Category'>;

const CategoryPage = ({ route }: CategoryPageProps) => {
  const { categoryName, data } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{categoryName || 'Category'}</Text>
      <FlatList
        data={data || dummyData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.genre}>{item.genre}</Text>
              <Text style={styles.views}>▶ {item.views}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(71, 20, 17, 1)',
    padding: 12,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#1c1c1e',
    width: (width - 36) / 2,
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    paddingBottom: 8,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    paddingHorizontal: 8,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginTop: 4,
  },
  genre: {
    color: '#f05a5a',
    fontSize: 12,
    backgroundColor: '#3c0f0f',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  views: {
    color: 'white',
    fontSize: 12,
  },
});

export default CategoryPage;
