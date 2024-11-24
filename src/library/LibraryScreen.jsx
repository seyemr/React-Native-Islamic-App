import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import booksData from './books.json'; // JSON dosyasını içe aktar

const LibraryScreen = ({ navigation }) => {
  const [isGrid, setIsGrid] = useState(false); // Izgara ve liste arasında geçiş yapmak için state

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>İslami Kitaplar</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, !isGrid && styles.activeButton]}
          onPress={() => setIsGrid(false)}
        >
          <Text style={styles.toggleButtonText}>Liste</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, isGrid && styles.activeButton]}
          onPress={() => setIsGrid(true)}
        >
          <Text style={styles.toggleButtonText}>Izgara</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={booksData.books} // JSON verisini kullan
        keyExtractor={(item) => item.id}
        numColumns={isGrid ? 2 : 1} // Izgara düzeni için sütun sayısı
        key={isGrid ? 'grid' : 'list'} // Görünüm değiştiğinde FlatList'i yeniden oluşturmak için key değişikliği
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.bookItem, isGrid && styles.gridItem]}
            onPress={() => navigation.navigate('LibraryDetails', { libraryName: item.title, libraryImg: item.image_url})}
          >
            <Text style={styles.bookTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102b52',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  activeButton: {
    backgroundColor: '#08c0ff',
    borderColor: '#333',
  },
  toggleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bookItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    margin: 5,
    flex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  gridItem: {
    marginHorizontal: 5,
    maxWidth: '48%', // Izgarada yan yana düzen için genişlik
  },
  bookTitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default LibraryScreen;
