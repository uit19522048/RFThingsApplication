import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase/firebase';


const Login: React.FC<{}> = ({navigation}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const RegisterEmailPassword = () => {
    if(email !== '' && password !== ''){
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => console.log('Signup success'))
      .catch((err) => Alert.alert("Signup error", err.message));
    }
  }

  const LoginEmailPassword = () => {
    navigation.navigate('Main')
    if(email !== '' && password !== ''){
      signInWithEmailAndPassword(auth, email, password)
      .then(() => navigation.navigate('Main'))
      .catch((err) => Alert.alert("Login error", err.message));
    }
  }

  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('/image/logo.png')}
        resizeMode='contain'
      />
      <TextInput 
        style={styles.InputText}
        placeholder='Email'
        value = {email}
        onChangeText = {text =>setEmail(text) }
      />
      <TextInput 
        style={styles.InputText}
        placeholder='Password'
        value = {password}
        onChangeText = {text =>setPassword(text) }
        secureTextEntry
      />

      <View>
        <TouchableOpacity 
         style={styles.buttonLogin}
         onPress={LoginEmailPassword}
        >
          <Text style={styles.textButton}>
            Login Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
         style={styles.buttonLogin}
         onPress={RegisterEmailPassword}
        >
          <Text style={styles.textButton}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text
            style={styles.textForgot}
          >Forgot Passwoard?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  logo: {
    width: "100%",
    height: 250
  },
  InputText: {
    width: 350,
    height: 50,
    marginTop: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  buttonLogin: {
    width: 200,
    backgroundColor: '#0d47a1',
    padding: 15,
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 30
  },
  textButton: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16
  },
  textForgot: {
    marginTop: 25,
    textAlign: 'center'
  },

});

export default Login;
