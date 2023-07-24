import React from 'react';
import { View, Button, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { auth } from 'firebase/firebase';
import { signOut } from 'firebase/auth';
import database from '@react-native-firebase/database';
import { gateway } from './home';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconOc from 'react-native-vector-icons/Octicons';

var arrTest = new Array();
var key;

// const getGateway = ref(db, 'Gateway_location/' + gateway);
// const dataGateway = onValue(getGateway, (snapshot) => {
//   return snapshot.val();
// });
var dataGateway;
database()
.ref('Gateway_location/' + gateway)
.once('value')
.then(snapshot => {
  dataGateway = snapshot.val()
});



const ProfileScreen: React.FC<{}> = ({navigation}) => {
  const getData = () => {
    console.log(arrTest);
  }

  const LogOut = () => {
    signOut(auth)
    .then(() => {
      // navigation.navigate('Auth');
      getData()
    })
    .catch((err) => Alert.alert("Login error", err.message));
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri:'https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/331118572_1244198626183700_8037140195127544075_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Kb8MTvI49OMAX91Y7d8&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBKejQv2m6tM1O5DlZ0EZgi9XB4Q1VJiSqYFxZf1DDsBg&oe=6498934E',

            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.statTitle, {
              marginTop: 15,
              marginBottom: 5
            }]}>Phuc Vu</Title>
            <Caption>@PhucVu</Caption>
          </View>
        </View>
      </View>
      
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
            {/* <Icon name="map-marker-radius" color="#777777" size={20}/> */}
            <Text style={{color: "#777777", marginLeft:20}}>HCM City, Viet Nam</Text>
        </View>
        <View style={styles.row}>
            {/* <Icon name="phone" color="#777777" size={20}/> */}
            <Text style={{color: "#777777", marginLeft:20}}>+84 868 243 740</Text>
        </View>
        <View style={styles.row}>
            {/* <Icon name="email" color="#777777" size={20}/> */}
            <Text style={{color: "#777777", marginLeft:20}}>phuc821666@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Title>$140</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple>
          <View style={styles.menuItem}>
            {/* <Icon name="account" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>About us</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple>
          <View style={styles.menuItem}>
            {/* <Icon name="settings-outline" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple>
          <View style={styles.menuItem}>
            {/* <Icon name="account-check-outline" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple>
          <View style={styles.menuItem}>
            {/* <IconOc name="sign-out" color="#FF6347" size={25}/>           */}
            <Text style={styles.menuItemText}>Sign out</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
})



export default ProfileScreen;
