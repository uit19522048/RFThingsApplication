import React, {useState} from 'react';
import { Text, View, StyleSheet, Touchable, TouchableOpacity, Image } from 'react-native';
import MapView, {Callout, Heatmap, Marker} from 'react-native-maps';
import database from '@react-native-firebase/database';
import { onValue } from 'firebase/database';
import { locations } from 'data/data';

var arrTest = new Array();
var key;

// database()
// .ref('rfthings-rak831-0022-hcmuit')
// .once('value')
// .then(snapshot => {
//     let i = 0;
//     snapshot.forEach(function(childSnapshot){
//       key = childSnapshot.key;
//       var data = childSnapshot.val();
//       if (data.Rssi != undefined && data.Rssi > -100)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 30};
//       }
//       if (data.Rssi != undefined && data.Rssi <= -100 && data.Rssi > -105)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 25};
//       }
//       if (data.Rssi != undefined && data.Rssi <= -105 && data.Rssi > -110)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 20};
//       }
//       if (data.Rssi != undefined && data.Rssi <= -110 && data.Rssi > -115)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 15};
//       }
//       if (data.Rssi != undefined && data.Rssi <= -115 && data.Rssi > -120)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 10};
//       }
//       if (data.Rssi != undefined && data.Rssi <= -120)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 5};
//       }
//       i++;
//     })
//   }
// );

// database()
// .ref('rfthings-rak7420-hcmuit')
// .once('value')
// .then(snapshot => {
//     let i = 0;
//     snapshot.forEach(function(childSnapshot){
//       key = childSnapshot.key;
//       var data = childSnapshot.val();
//       if (data.Rssi != undefined && data.Rssi > -30)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 1200};
//       }
//       if (data.Rssi != undefined && data.Rssi <= -30 && data.Rssi > -50)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 1000};
//       }
//       if (data.Rssi != undefined && data.Rssi <= -50 && data.Rssi > -70)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 800};
//       }
//       if (data.Rssi != undefined && data.Rssi <= -70 && data.Rssi > -90)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 600};
//       }
//       if (data.Rssi != undefined && data.Rssi <= -90 && data.Rssi > -110)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 400};
//       }
//       if (data.Rssi != undefined && data.Rssi <= -110)
//       {
//         arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 200};
//       }
//       i++;
//     })
//   }
// );

database()
.ref('Test')
.once('value')
.then(snapshot => {
    let i = 0;
    snapshot.forEach(function(childSnapshot){
      key = childSnapshot.key;
      var data = childSnapshot.val();
      if (data.Rssi != undefined && data.Rssi > -30)
      {
        arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 1200};
      }
      if (data.Rssi != undefined && data.Rssi <= -30 && data.Rssi > -50)
      {
        arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 1000};
      }
      if (data.Rssi != undefined && data.Rssi <= -50 && data.Rssi > -70)
      {
        arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 800};
      }
      if (data.Rssi != undefined && data.Rssi <= -70 && data.Rssi > -90)
      {
        arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 600};
      }
      if (data.Rssi != undefined && data.Rssi <= -90 && data.Rssi > -110)
      {
        arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 400};
      }
      if (data.Rssi != undefined && data.Rssi <= -110)
      {
        arrTest[i] = {title: 1, latitude: data.Latitude, longitude: data.Longitude, weight: 200};
      }
      i++;
    })
  }
);

const HeatMapScreen: React.FC<{}> = ({navigation}) => {
  const [origin, setOrigin] = useState({
    latitude: 10.86979021434494,
    longitude: 106.80258840322497,
  })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MapView 
        style={styles.map}
        initialRegion = {{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Marker 
          style={styles.makerImage}
          coordinate={{
            latitude: 10.65430,
            longitude: 106.8697            
          }}
          pinColor="gray"
        >
          <Callout><Text>Gateway</Text></Callout>
        </Marker>

        <Marker 
          style={styles.makerImage}
          coordinate={{
            latitude: 10.86979021434494,
            longitude: 106.80258840322497
          }}
          pinColor="gray"
        >
          <Callout><Text>Gateway</Text></Callout>
        </Marker>

        <Heatmap 
          points = {arrTest}
          radius = {30}
          opacity = {1}
          gradient={{
            colors: ["#0000FF", "#00FFFF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"],
            startPoints: [0.16, 0.33, 0.5, 0.67, 0.86, 1],
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  },
  makerImage: {
    height: '5%',
    width: '5%',
    // borderRadius: 25
  }
})

export default HeatMapScreen;
