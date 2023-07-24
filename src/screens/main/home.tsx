import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, TextInput, Image, TouchableOpacity, ImageBackgroundBase } from 'react-native';
import database from '@react-native-firebase/database';
import SelectDropdown from 'react-native-select-dropdown';

var gateway;

var arrTest = new Array();

database()
.ref('Gateway_location')
.once('value')
.then(snapshot => {
    let i = 0;
    snapshot.forEach(function(childSnapshot){
      var key = childSnapshot.key;
      arrTest[i] = key;
      i++;
    })
  }
);

const countries = ["Egypt", "Canada", "Australia", "Ireland"]

const HomeScreen: React.FC<{}> = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
  },
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},

})

export default HomeScreen;
export var gateway