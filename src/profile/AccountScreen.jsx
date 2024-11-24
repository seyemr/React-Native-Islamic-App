import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hesabım</Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Ad Soyad:</Text>
        <Text style={styles.value}>Seydi EMRE</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>seydiemre@example.com</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('WelcomeScreen')}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoBox: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
  logoutButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#ff4d4f',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default AccountScreen;
