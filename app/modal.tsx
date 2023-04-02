import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import { useState, useEffect } from 'react';
import { Accelerometer, AccelerometerMeasurement } from 'expo-sensors';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ShakeIcon({ style }: { style?: Object }) {
  return (
    <LinearGradient
      colors={['#92C5EB', '#FFBBE8']}
      style={style}
    >
      <MaterialCommunityIcons size={90} color="white" name="vibrate" />
    </LinearGradient>
  )
}

export default function ModalScreen() {
  
  const [data, setData] = useState<AccelerometerMeasurement>({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const [shooken, setShooken] = useState(false);
  const [accelSum, setAccelSum] = useState(0);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(setData),
    );
  }

  const _unsubscribe = () => {
    subscription && Accelerometer.removeSubscription(subscription);
    setSubscription(null);
  }

  const calculateSum = ({ x, y, z }: {
    x: number,
    y: number,
    z: number,
  }) => {
    return Math.round(Math.abs(x) + Math.abs(y) + Math.abs(z));
  };

  useEffect(() => {
    _subscribe();
    Accelerometer.setUpdateInterval(500);
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    const dataSum = calculateSum(data);
    console.log(dataSum);
    setAccelSum(dataSum);
    if (dataSum > 10) {
      setShooken(true);
      // setTimeout(() => setShooken(false), 2000);
      _unsubscribe();
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>--</Text>
      <View style={styles.separator} lightColor="#fff" />
          <Text style={{ color: "black" }}>Accelerometer:</Text>
          {(data)
              ? <Text style={{ color: "black" }}>x: {Math.round(data.x)} y: {Math.round(data.y)} z: {Math.round(data.z)}</Text>
              : <Text style={{ color: "black" }}>unavailable</Text>
          }
          <ShakeIcon style={styles.shakeIcon} />
          {
            (shooken) 
              ? <Text style={{ color: "black", fontSize: 50 }}>SHOOKEN!!!!!! VALUE = {accelSum}</Text>
              : <Text style={{ color: "black" }}>shake it</Text>
          }

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  shakeIcon: {
    borderRadius: 15,
    padding: 10,
  },
});
