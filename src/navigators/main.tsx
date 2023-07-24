import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import HomeScreen from 'screens/main/home';
import ProfileScreen from 'screens/main/profile';
import HeatMapScreen from 'screens/main/heatmap';


const Tab = createBottomTabNavigator();

const Main: React.FC<{}> = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Heat map'
        component={HeatMapScreen}
        options={{
          tabBarLabel: 'Heat map',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
