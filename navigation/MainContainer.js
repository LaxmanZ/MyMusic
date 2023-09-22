import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';

// Screen Names
const homeName = 'MusicNest';
const libraryName = 'Your Library';
const searchName = 'Search';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (routeName === searchName) {
              iconName = focused ? 'search' : 'search-outline';
            } else if (routeName === libraryName) {
              iconName = focused ? 'library' : 'library-outline';
            } else if (routeName === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            tabBarLabelStyle: {
              fontSize: 10,
            },
            tabBarStyle: {
              backgroundColor: 'black',
              borderTopColor: 'transparent',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
          }}
        />
        <Tab.Screen
          name={searchName}
          options={{
            tabBarLabelStyle: {
              fontSize: 10,
            },
            tabBarStyle: {
              backgroundColor: 'black',
              borderTopColor: 'transparent',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
          }}
          component={SearchScreen}
        />
        <Tab.Screen
          name={libraryName}
          options={{
            tabBarLabelStyle: {
              fontSize: 10,
            },
            tabBarStyle: {
              backgroundColor: 'black',
              borderTopColor: 'transparent',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
          }}
          component={LibraryScreen}
        />
        <Tab.Screen
          name={settingsName}
          options={{
            tabBarLabelStyle: {
              fontSize: 10,
            },
            tabBarStyle: {
              backgroundColor: 'black',
              borderTopColor: 'transparent',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
