import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import surahsData from './surah.json';

const QuranScreen = ({navigation}) => {
  const [isGrid, setIsGrid] = useState(false); // Izgara ve liste görünümü arasında geçiş için state

  const handleSurahPress = () => {
    navigation.navigate('SurahDetails', {surahName: "Kur'an-ı Kerim"});
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Kur'an-ı Kerim Başlığı */}
      <TouchableOpacity
        onPress={handleSurahPress}
        style={[styles.surahCard, styles.quranCard]} // Özel stiller
      >
        <Text style={styles.title}>Kur'an-ı Kerim</Text>
      </TouchableOpacity>
      {/* Görünüm Değiştirme Butonları */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, !isGrid && styles.activeButton]}
          onPress={() => setIsGrid(false)}>
          <Text style={styles.toggleButtonText}>Liste</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, isGrid && styles.activeButton]}
          onPress={() => setIsGrid(true)}>
          <Text style={styles.toggleButtonText}>Izgara</Text>
        </TouchableOpacity>
      </View>

      {/* Surelerin Listesi */}
      <FlatList
        data={surahsData.surahs}
        keyExtractor={item => item.id.toString()}
        numColumns={isGrid ? 2 : 1} // Izgara veya liste görünümü
        key={isGrid ? 'grid' : 'list'} // Görünüm değiştiğinde FlatList'i yeniden oluşturmak için
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.surahCard, isGrid && styles.gridItem]}
            onPress={() =>
              navigation.navigate('SurahDetails', {surahName: item.name})
            }>
            <Text style={styles.surahName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#12465b',
  },
  header: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  toggleContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  toggleButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
  activeButton: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  toggleButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  quranCard: {
    margin: 10,
    backgroundColor: '#2d86',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  surahCard: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
  },
  surahName: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  gridItem: {
    margin: 5,
    flex: 1,
    maxWidth: '48%', // Izgarada öğelerin genişliği
  },
});

export default QuranScreen;
