import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function ShakeIcon({ style }: { style?: Object }) {
  const existingStyle: Object[] = [styles.shakeIconGradientContainer];
  if (style) existingStyle.push(style);

  return (
    <LinearGradient
      colors={['#92C5EB', '#FFBBE8']}
      style={existingStyle}
    >
      <MaterialCommunityIcons size={36} color="white" name="vibrate" />
    </LinearGradient>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="view-dashboard-outline" size={28} color={color} />,
          headerLeft: () => {
            return (
              <MaterialCommunityIcons 
                name="view-dashboard-outline" 
                size={28} 
                color="white" 
                style={{ marginLeft: 15 }}
              />
            );
          },
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <Octicons name="people" size={28} color={color} />,
          headerLeft: () => {
            return (
              <Octicons 
                name="people" 
                size={28} 
                color="white" 
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
          tabBarIcon: () => <ShakeIcon />,
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
          headerLeft: () => {
            return (
              <MaterialCommunityIcons 
                name="checkbox-marked-circle-plus-outline" 
                size={28} 
                color="white" 
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
          headerLeft: () => {
            return (
              <Octicons 
                name="graph" 
                size={28} 
                color="white" 
                style={{ marginLeft: 15 }}
              />
            );
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
});