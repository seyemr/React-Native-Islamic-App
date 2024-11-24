import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

const SurahDetails = ({ route }) => {
  const { libraryName,libraryImg } = route.params; // LibraryScreen'den gelen librayName parametresini alıyoruz

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kitap Detayları</Text>
      <Text style={styles.libraryName}>{libraryName}</Text>
      <Text style={styles.libraryImage}>
        <Image source={{ uri: libraryImg }} style={{ width: "100%", height: 550 }} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  libraryName: {
    textAlign:"center",
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
  },
  libraryId: {
    fontSize: 16,
    color: 'gray',
  },
  libraryImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
  },
});

export default SurahDetails;
