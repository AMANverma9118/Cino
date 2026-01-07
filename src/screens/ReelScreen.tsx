import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const sampleReels = [
  require('../assets/Moviephoto.jpg'),
  require('../assets/pitcher1.png'),
  require('../assets/Moviephoto.jpg'),
];

const ReelScreen = () => {
  const route = useRoute();
  const navigation: any = useNavigation();
  const { movieId } = (route.params || {}) as { movieId?: string };
  const ref = useRef<FlatList<any>>(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={sampleReels}
        keyExtractor={(_, i) => String(i)}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({ item }) => (
          <ImageBackground source={item} style={styles.slide} resizeMode="cover">
            <View style={styles.topRow}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
              <Text style={styles.movieIdText}>{movieId ? `Movie: ${movieId}` : ''}</Text>
            </View>
            <View style={styles.bottomOverlay}>
              <Text style={styles.reelTitle}>Sample Reel</Text>
              <Text style={styles.reelSubtitle}>Tap and swipe up/down to browse reels</Text>
            </View>
          </ImageBackground>
        )}
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  slide: { width: '100%', height, justifyContent: 'space-between' },
  topRow: { marginTop: 48, marginHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between' },
  closeBtn: { padding: 8, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 6 },
  closeText: { color: '#fff' },
  movieIdText: { color: '#fff', alignSelf: 'center' },
  bottomOverlay: { padding: 20, backgroundColor: 'rgba(0,0,0,0.25)' },
  reelTitle: { color: '#fff', fontSize: 20, fontWeight: '700' },
  reelSubtitle: { color: '#ddd', marginTop: 6 },
});

export default ReelScreen;
