import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function ShakeIcon({ style }: { style?: Object }) {
  const existingStyle: Object[] = [styles.shakeIconGradientContainer];
  if (style) existingStyle.push(style);

  return (
    <LinearGradient
      colors={['#92C5EB', '#FFBBE8']}
      style={existingStyle}
    >
      <MaterialCommunityIcons size={50} color="white" name="vibrate" />
    </LinearGradient>
  )
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 100,
        },
        tabBarActiveTintColor: Colors['dark'].tint,
        headerTintColor: "#000",
        tabBarBackground: () => <View style={{ backgroundColor: "#fff", height: "100%", width: "100%" }}/>,
        headerBackground: () => <View style={{ backgroundColor: "#fff", height: "100%", width: "100%" }}/>,
        headerRight: () => (
          <Link href="/profile" asChild>
            <Pressable>
              {() => {
                return <Ionicons 
                  name="ios-person" 
                  size={25} 
                  color="grey" 
                  style={{ marginRight: 15 }} 
                />
              }}
            </Pressable>
          </Link>
        ),
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="view-dashboard-outline" size={28} color={color} />,
          headerLeft: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons 
                name="view-dashboard-outline" 
                size={28} 
                color={tintColor} 
                style={{ marginLeft: 15 }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <Octicons name="people" size={28} color={color} />,
          headerLeft: ({ tintColor }) => {
            return (
              <Octicons 
                name="people" 
                size={28} 
                color={tintColor}
                style={{ marginLeft: 15 }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="shake"
        options={{
          title: "",
          tabBarButton: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <ShakeIcon style={{ marginTop: 5 }}/>
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => {
            return (
              <ShakeIcon 
                style={{ marginLeft: 15 }}
              />
            );
          },
        }}
      />
      <Tabs.Screen 
        name="goals"
        options={{
          title: "Goals",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="checkbox-marked-circle-plus-outline" size={28} color={color} />,
          headerLeft: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons 
                name="checkbox-marked-circle-plus-outline" 
                size={28} 
                color={tintColor}
                style={{ marginLeft: 15 }}
              />
            );
          },
        }}
      />
      <Tabs.Screen 
        name="progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ color }) => <Octicons name="graph" size={28} color={color} />,
          headerLeft: ({ tintColor }) => {
            return (
              <Octicons 
                name="graph" 
                size={28} 
                color={tintColor}
                style={{ marginLeft: 15 }}
              />
            );
          },
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          tabBarItemStyle: { 
            display: 'none', 
          }, 
        }} 
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  shakeIconGradientContainer: {
    borderRadius: 50,
    padding: 5,
  },
  background: {
    backgroundColor: "#fff",
  },
});