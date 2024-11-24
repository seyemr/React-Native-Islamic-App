import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const PrayerTimes = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://api.aladhan.com/v1/timingsByCity?city=Gaziantep&country=Turkey&method=1'
        );
        const json = await response.json();

        if (json && json.data && json.data.timings) {
          setData(json.data.timings);
        } else {
          throw new Error('Veriler beklenen formatta değil.');
        }
      } catch (err) {
        setError(err.message);
        console.error('Veri alırken hata oluştu:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#ff6347" />
        <Text style={styles.loadingText}>Veriler yükleniyor...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Hata: {error}</Text>
      </SafeAreaView>
    );
  }

  if (!data) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.noDataText}>Veri bulunamadı.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Namaz Vakitleri</Text>
      <View style={styles.timingsContainer}>
        <Text style={styles.timingText}>Sabah: {data.Fajr}</Text>
        <Text style={styles.timingText}>Güneş: {data.Sunrise}</Text>
        <Text style={styles.timingText}>Öğle: {data.Dhuhr}</Text>
        <Text style={styles.timingText}>İkindi: {data.Asr}</Text>
        <Text style={styles.timingText}>Akşam: {data.Maghrib}</Text>
        <Text style={styles.timingText}>Yatsı: {data.Isha}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#285659',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  loadingText: {
    fontSize: 20,
    color: '#ff6347',
    marginTop: 10,
  },
  timingsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    textAlign: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  timingText: {
    fontSize: 20,
    marginVertical: 10,
    color: '#0c2b3a',
    fontFamily: 'Arial',
    fontWeight: '600',
    textAlign: 'left',
    paddingLeft: 15,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    paddingVertical: 8,
    width: '100%',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#d32f2f',
    textAlign: 'center',
  },
  noDataText: {
    fontSize: 18,
    color: '#757575',
    textAlign: 'center',
  },
});

export default PrayerTimes;
