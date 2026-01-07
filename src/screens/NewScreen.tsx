import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type CategoryPageRouteParams = {
  CategoryPage: {
    categoryName: string;
    data: {
      id: string;
      title: string;
      genre: string;
      views: string;
      image: any;
    }[];
  };
};

type CategoryPageRouteProp = RouteProp<CategoryPageRouteParams, 'CategoryPage'>;

const { width } = Dimensions.get('window');
const cardWidth = (width - 40) / 2;

const NewPage = () => {
  const navigation = useNavigation();
  const route = useRoute<CategoryPageRouteProp>();

  const { categoryName, data } = route.params;

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.meta}>
        <Text style={styles.genre}>{item.genre}</Text>
        <Text style={styles.views}>▶ {item.views}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName}</Text>
        <View style={{ width: 50 }} />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(20, 20, 20, 1)',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: cardWidth,
    backgroundColor: '#1c1c1e',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
    paddingHorizontal: 8,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingBottom: 8,
    marginTop: 4,
  },
  genre: {
    color: '#ff497c',
    fontSize: 12,
    backgroundColor: '#2e2e2e',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  views: {
    color: '#bbb',
    fontSize: 12,
  },
});

export default NewPage;
