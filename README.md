## İslami Mobil Uygulama

Bu uygulama, İslami içeriklere erişimi kolaylaştırmak ve günlük ibadetleri takip etmek için tasarlanmış bir mobil uygulamadır. Kullanıcılar, namaz vakitlerini öğrenebilir, günün duasını, ayetini, hadislerini ve kıssalarını görebilir. Ayrıca, Kur'an-ı Kerim'e, İslami kitaplara, kıbleye ve konuma kolay erişim sağlayabilirler.

# Özellikler

1. Hoşgeldin Sayfası: Uygulamaya ilk kez giren kullanıcılar için hoş geldiniz mesajı.
2. Ana Ekran: Günün ayeti, hadisi, duası ve kıssası.
3. Namaz Vakitleri: Günlük namaz vakitlerini gösterir.
4. Kur'an-ı Kerim: Kur'an surelerini listeler ve her sureyi açarak içeriği görüntülemenizi sağlar.
5. Kıble ve Konum: Kullanıcının mevcut konumunu tespit eder ve kıble yönünü gösterir.
6. İslami Kütüphane: İslami kitapların listesi ve kitap içeriği.
7. Zikir Sayacı: Kullanıcıların zikir çekmesini sağlayan bir sayaç.
8. Ayarlar Sayfası: Karanlık mod özelliği ve diğer ayarlar.
9. Hesabım Sayfası: Kullanıcı profili ve hesap bilgileri.

# Başlarken

Bu uygulamayı yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

# Prerequisites

Node.js yüklü olmalıdır.
Expo CLI veya React Native CLI kullanabilirsiniz.
Android veya iOS cihaz/emülatör gereklidir.
Kurulum

1. Repo'yu Klonlayın
bash
Kodu kopyala
git clone https://github.com/username/islami-uygulama.git
cd islami-uygulama

2. Bağımlılıkları Yükleyin
Kodu kopyala
npm install
veya
Kodu kopyala
yarn install

3. Uygulamayı Çalıştırın
Expo kullanıyorsanız:

sql
Kodu kopyala
npm start
React Native kullanıyorsanız:

arduino
Kodu kopyala
npx react-native run-android
veya

arduino
Kodu kopyala
npx react-native run-ios

# Yapı

1. screens/: Tüm ekran bileşenlerinin bulunduğu klasör.
2. WelcomeScreen.js: Hoşgeldin sayfası.
3. HomeScreen.js: Ana ekran.
4. PrayerTimesScreen.js: Namaz vakitleri sayfası.
5. QuranScreen.js: Kur'an-ı Kerim sayfası.
6. QiblaScreen.js: Kıble ve Konum sayfası.
7. LibraryScreen.js: İslami kütüphane sayfası.
8. SettingsScreen.js: Ayarlar sayfası.
9. AccountScreen.js: Hesabım sayfası.
10. ZikrScreen.js: Zikir sayfası.
11. components/: Ortak bileşenler, örneğin butonlar, kartlar vb.
12. assets/: Görseller, simgeler vb. medya dosyaları.
13. App.js: Uygulamanın giriş noktası ve ekran yönlendirmesi.

# Teknolojiler

- React Native: Uygulamanın geliştirilmesinde kullanılan ana çerçeve.
- React Navigation: Uygulama içi ekran yönlendirme.
- Redux (isteğe bağlı): Uygulama durumu yönetimi.
- Axios: API çağrıları için.
- AsyncStorage: Kullanıcı verilerini cihazda saklamak için.
- React Native Geolocation: Kullanıcı konumunu almak için.
- React Native Vector Icons: Simgeler için.

# API Entegrasyonu

Bu uygulama, namaz vakitlerini almak için çeşitli API'ler kullanılabilir. Örnek olarak, Aladhan API'yi kullanarak namaz vakitlerini alabilirsiniz. Bu API, belirli bir konum için namaz vakitlerini sağlayacaktır.

# Aladhan API Kullanımı
Aladhan API'ye bağlanmak için axios kullanarak aşağıdaki gibi bir istek yapabilirsiniz:

js
Kodu kopyala
import axios from 'axios';

const getPrayerTimes = async (latitude, longitude) => {
  try {
    const response = await axios.get(`http://api.aladhan.com/v1/timings`, {
      params: {
        latitude,
        longitude,
        method: 2, // Fıkhi hesaplama yöntemi
      },
    });
    return response.data.data.timings;
  } catch (error) {
    console.error(error);
  }
};

# Katkıda Bulunma
Bu projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları takip edin:

Repo'yu fork'layın.
Yeni bir özellik dalı (branch) oluşturun: git checkout -b feature/your-feature
Yaptığınız değişiklikleri commit'leyin: git commit -am 'Add new feature'
Dala gönderin: git push origin feature/your-feature
Pull request oluşturun.

## Lisans

- Bu Proje Seydi EMRE tarafından hazırlanmıştır.
- Bu proje MIT Lisansı ile lisanslanmıştır - daha fazla bilgi için LICENSE dosyasına bakabilirsiniz.

# Notlar
Tema Değiştirme: Karanlık mod ve açık mod gibi tema seçeneklerini kullanıcıya sunarak, uygulamanın görünümünü daha kullanıcı dostu hale getirebilirsiniz.
Daha fazla özellik eklenebilir: Güncel İslami içerikler, günlük zikir hatırlatıcıları, dua metinleri vb. ekleyebilirsiniz.
Herhangi bir sorunuz varsa, bana ulaşabilirsiniz! 😊

