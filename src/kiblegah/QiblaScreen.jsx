import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';

const QiblaScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [qiblaDirection, setQiblaDirection] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          setLoading(false);
          alert('Konum izni verilmedi!');
          return;
        }
      }

      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(position.coords);
          setMapRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          const qibla = getQiblaDirection(latitude, longitude);
          setQiblaDirection(qibla);
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    getLocation();
  }, []);

  const handleMapPress = () => {
    // Harita ekranına yönlendir
    navigation.navigate('Map', { region: mapRegion });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kıble ve Konum</Text>
      {loading ? (
        <Text>Yükleniyor...</Text>
      ) : location ? (
        <View>
          <Text style={styles.info}>
            Enlem: {location.latitude}, Boylam: {location.longitude}
          </Text>
          <Text style={styles.info}>
            Kıble Yönü: {qiblaDirection ? qiblaDirection : 'Hesaplanıyor...'}
          </Text>

          <TouchableOpacity onPress={handleMapPress}>
            <Text style={styles.link}>Harita Görüntüle</Text>
          </TouchableOpacity>

          <MapView
            style={styles.map}
            region={mapRegion}
            showsUserLocation={true}
            showsCompass={true}
            followUserLocation={true}
          >
            <Marker coordinate={location} title="Konum" />
            {qiblaDirection && (
              <Marker
                coordinate={{
                  latitude: location.latitude + 0.01, // Kıble yönü hesaplamasına göre düzenleme yapılacak
                  longitude: location.longitude + 0.01, // Kıble yönü hesaplamasına göre düzenleme yapılacak
                }}
                title="Kıble"
                pinColor="blue"
              />
            )}
          </MapView>
        </View>
      ) : (
        <Text>Konum alınıyor...</Text>
      )}
    </View>
  );
};

// Kıble yönü hesaplamak için yardımcı fonksiyon
const getQiblaDirection = (latitude, longitude) => {
  const makkahLatitude = 21.4225; // Mekke'nin enlemi
  const makkahLongitude = 39.8262; // Mekke'nin boylamı

  const deltaLongitude = makkahLongitude - longitude;
  const deltaLatitude = makkahLatitude - latitude;

  // Kıble yönü hesaplama formülü (enlem ve boylam farkları kullanılarak)
  const angle = Math.atan2(
    Math.sin(deltaLongitude) * Math.cos(makkahLatitude),
    Math.cos(latitude) * Math.sin(makkahLatitude) - Math.sin(latitude) * Math.cos(makkahLatitude) * Math.cos(deltaLongitude)
  );

  const qiblaAngle = (angle * 180) / Math.PI; // Derece cinsine çeviriyoruz
  return qiblaAngle.toFixed(2); // Kıble yönünü derece olarak döndürüyoruz
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginTop: 10,
  },
  map: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default QiblaScreen;
