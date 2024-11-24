import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/welcome/WelcomeScreen';
import HomeScreen from './src/home/HomeScreen';
import PrayerTimes from './src/namazTimes/PrayerTimes';
import QuranScreen from './src/kuran/QuranScreen';
import SurahDetails from './src/kuran/SurahDetails';
import QiblaScreen from './src/kiblegah/QiblaScreen';
import LibraryScreen from './src/library/LibraryScreen';
import MapScreen from './src/harita/MapScreen';
import LibraryDetails from './src/library/LibraryDetails';
import SettingsScreen from './src/setting/Setting';
import ZikrScreen from './src/zikir/ZikrScreen';
import AccountScreen from './src/profile/AccountScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PrayerTimes" component={PrayerTimes} />
        <Stack.Screen name="Quran" component={QuranScreen} />
        <Stack.Screen
          name="SurahDetails"
          component={SurahDetails}
          options={{title: 'Sure Detayları'}}
        />
        <Stack.Screen name="Qibla" component={QiblaScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="LibraryDetails" component={LibraryDetails}  options={{title:"Kitap Detayı"}}/>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Setting" component={SettingsScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Zikr" component={ZikrScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
