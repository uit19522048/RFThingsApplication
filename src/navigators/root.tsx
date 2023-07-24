import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivateNavigator from './private';
import AuthNavigator from './auth';

const Stack = createNativeStackNavigator();

const Root: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Private" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Private" component={PrivateNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
