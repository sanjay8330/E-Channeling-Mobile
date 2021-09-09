import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  Button,
  View,
} from "react-native";

export default function SearchDoctorBySpecialization() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.home}>
        <Image style={styles.image}
          source={require('../assets/home.png')}></Image>
      </View>

      <Text style={styles.title}>E-channelling - Sri Lanka</Text>

      <Text style={styles.phrase}>"Channel doctors with minimum clicks and maximum reliability"</Text>

      <Text style={styles.search}>Search doctors by specilization</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    height: 0,
    borderWidth: 2,
    borderColor: '#59F3EA'
  },
  image: {
    width: 30,
    height: 30,
    marginTop: 15,
    marginLeft: 15
  },
  container: {
    backgroundColor: "white",
  },
  title: {
    textAlign: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    marginTop: 20,
    fontSize: 18
  },
  phrase: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    fontStyle: 'italic'
  },
  search: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
  }
});
