import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const SurahDetails = ({ route }) => {
  const { surahName } = route.params; // QuranScreen'den gelen surahName parametresini alıyoruz

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sure Detayları</Text>
      <Text style={styles.surahName}>{surahName}</Text>
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
  surahName: {
    fontSize: 18,
    color: 'gray',
  },
});

export default SurahDetails;
