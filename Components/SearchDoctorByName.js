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

export default function SearchDoctorByName({ navigation }) {

  //Onpress Handler
  const pressHandler = () => {
    navigation.navigate('searchDoctorUI2');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>E-channelling - Search Doctor</Text>
      </View>

      <View style={styles.tinylogo}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/logo.jpg")}
        />
      </View>

      <View style={styles.focusContainer}>
        <Text>Search Doctor</Text>
        <TextInput
          style={styles.input}
          placeholder="Doctor name"
          keyboardType="default"
        />
        <View style={styles.button}>
          <Button color="green" title="Search" />
        </View>
      </View>

      <View style={styles.focusContainer2}>
        <Text style={{ color: 'blue', fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 16 }} onPress={pressHandler}>Search Doctor by specialization</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 650
  },
  title: {
    textAlign: 'center',
    alignItems: 'center',
    textAlignVertical: 'center', 
    marginTop: 20
  },
  tinyLogo: {
    width: 220,
    height: 100,
    marginLeft: 80,
    marginTop: 30
  },
  focusContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "40%",
    height: "10%",
    marginTop: "5%"
  },
  focusContainer2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  }
});

