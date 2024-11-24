import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ZikrScreen = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zikir Çekme</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>Zikir Çek</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetCount}>
        <Text style={styles.buttonText}>Sıfırla</Text>
      </TouchableOpacity>
    </View>
  );
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
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    padding: 15,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#ff4d4f',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ZikrScreen;
