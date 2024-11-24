import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Opaklık için bir animasyon değeri oluşturuluyor
  const fadeAnim = new Animated.Value(0); // Başlangıçta görünmez (opacity: 0)

  // Animasyonu başlatma
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Opaklık değeri 1 olacak (tam görünür)
      duration: 2000, // 2 saniye sürecek
      useNativeDriver: true, // Performans için native driver kullanımı
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Gif arka planda olacak şekilde konumlandırılacak */}
      <Image
        source={require('../assets/besmele.gif')}
        style={styles.animation}
      />

      {/* Buton, gif'in üzerinde olacak şekilde konumlandırılacak */}
      <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim }]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.buttonText}>Başla</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    position: 'relative', // Button ve gif için doğru konumlandırma
  },
  animation: {
    width: '100%',
    height: '110%',
    borderRadius: 10,
    position: 'absolute', // Arka planda kalması için absolute konumlandırma
    top: 0,
    left: 0,
  },
  buttonContainer: {
    position: 'absolute', // Buton gif'in üstünde olacak
    bottom: 50, // Butonu ekranın alt kısmına yerleştiriyoruz
    width: '80%', // Buton genişliği
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Butonun gif'in önünde olmasını sağlıyoruz
  },
  button: {
    backgroundColor: '#126d7e', // Buton arka plan rengi
    borderRadius: 8, // Butonun köşe yuvarlama
    paddingVertical: 15, // Butonun dikey pad'i
    width: '100%', // Buton genişliği
    alignItems: 'center', // Yazıyı ortala
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 32, // Yazı boyutunu büyük yapmak için
    fontWeight: 'bold', // Yazıyı kalın yapmak için
    color: 'white', // Yazı rengi beyaz
  },
});

export default WelcomeScreen;
