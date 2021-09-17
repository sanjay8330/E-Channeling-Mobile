import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  Button,
  View,
  TouchableOpacity
} from "react-native";

export default function SearchDoctorByName({ navigation }) {

  //Onpress Handler
  const pressHandler = () => {
    navigation.navigate('searchDoctorUI2');
  }

  //Navigate to search Results
  const pressHandleNavigation = () => {
    navigation.navigate('searchResults');
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.home}>
        <Image style={styles.image}
          source={require('../assets/home.png')}></Image>
      </View>

      <Text style={styles.title}>E-channelling - Sri Lanka</Text>

      <Text style={styles.phrase}>"Channel doctors with minimum clicks and maximum reliability"</Text>

      <Text style={styles.search}>Search Doctor</Text>

      <View style={styles.focusContainer}>

        <TextInput
          style={styles.input}
          placeholder="Doctor name"
          keyboardType="default"
        />

        <View style={styles.button}>
          <Button color="#1e90ff" title="Search" onPress={pressHandleNavigation} />
        </View>
        <View style={styles.buttonImg}>
          <Image style={styles.searchImg}
            source={require('../assets/searchIcon.jpg')}></Image>
        </View>
      </View>

      <Text style={styles.or}>or</Text>

      <Text style={styles.link} onPress={pressHandler}>Search Doctor by specialization</Text>

      <View style={styles.appContainer}>
        <Text style={styles.upApp}>Upcoming Appointments</Text>
        <Image style={styles.calander}
          source={require('../assets/appoint.jpg')}></Image>
        <Text style={styles.appPhrase}>You don't have any upcoming appointment.If you wish to fix an appointment Click Here!</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    height: 0,
    borderWidth: 2,
    borderColor: '#1e90ff'
  },
  image: {
    width: 30,
    height: 30,
    marginTop: 15,
    marginLeft: 15
  },
  container: {
    backgroundColor: "white",
    height: 650
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
    marginTop: 15,
    fontSize: 16,
  },
  focusContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: "85%",
    borderWidth: 1,
    padding: 10,
    marginTop: 15
  },
  button: {
    marginTop: 20,
    width: 160
  },
  searchImg: {
    width: 30,
    height: 30,
    marginLeft: 200,
    marginTop: -32,
  },
  or: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
  appContainer: {
    marginTop: 15,
    height: 300,
    width: '90%',
    marginLeft: '5%',
    borderWidth: 2
  },
  upApp: {
    marginTop: 8,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  calander: {
    width: '95%',
    height: '70%',
    marginLeft: 10,
    marginTop: 8,
  },
  appPhrase: {
    marginTop: 8,
    textAlign: 'center'
  }
});

