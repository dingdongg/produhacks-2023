import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import { useState, useEffect } from 'react';
import { Accelerometer, AccelerometerMeasurement } from 'expo-sensors';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

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

  const router = useRouter();
  
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
    if (dataSum > 7) {
      setShooken(true);
      router.replace("/goals");
      _unsubscribe();
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>--</Text>
      <View style={styles.separator} lightColor="#fff" />
          {
            (shooken) 
              ? <Text style={{ color: "black", fontSize: 50 }}>SHOOKEN!!!!!! VALUE = {accelSum}</Text>
              : <Text style={{ maxWidth: "80%", color: "black", fontSize: 24, marginBottom: 200, marginTop: -123, fontWeight: "bold", textAlign: 'center' }}>
                  Before you light up...{"\n"}
                  Shake it off and choose a better path.
                </Text>
          }
          <ShakeIcon style={styles.shakeIcon} />
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
