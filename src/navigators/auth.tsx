import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'screens/auth/login';
import Signup from 'screens/auth/signup';

const Stack = createNativeStackNavigator();

const Auth: React.FC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default Auth;
