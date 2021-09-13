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
import { ScrollView } from "react-native-gesture-handler";

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

      <ScrollView style={styles.ScrollView}>
        <View style={styles.specContLeft}>
          <View style={styles.focusContainer}>
            <Image style={styles.specImage1}
              source={require('../assets/dentist.png')}></Image>
            <Text style={styles.specLabel}>Dentist</Text>
            <Text>5 doctors available</Text>
            <View style={styles.viewBtn}>
              <Button title="View" />
            </View>
          </View>
        </View>

        <View style={styles.specContRight}>
          <View style={styles.focusContainer}>
            <Image style={styles.specImage2}
              source={require('../assets/cardiologist.png')}></Image>
            <Text style={styles.specLabel}>Cardiologist</Text>
            <Text>14 doctors available</Text>
            <View style={styles.viewBtn}>
              <Button title="View" />
            </View>
          </View>
        </View>

        <View style={styles.specContLeft}>
          <View style={styles.focusContainer}>
            <Image style={styles.specImage3}
              source={require('../assets/psychiatrist2.jpg')}></Image>
            <Text style={styles.specLabel}>Psychiatrist</Text>
            <Text>7 doctors available</Text>
            <View style={styles.viewBtn}>
              <Button title="View" />
            </View>
          </View>
        </View>

        <View style={styles.specContRight}>
          <View style={styles.focusContainer}>
            <Image style={styles.specImage2}
              source={require('../assets/neurosurgeon.jpg')}></Image>
            <Text style={styles.specLabel}>Neuro Surgeon</Text>
            <Text>5 doctors available</Text>
            <View style={styles.viewBtn}>
              <Button title="View" />
            </View>
          </View>
        </View>

        <View style={styles.specContLeft}>
          <View style={styles.focusContainer}>
            <Image style={styles.specImage5}
              source={require('../assets/eye.jpg')}></Image>
            <Text style={styles.specLabel}>Eye Specialist</Text>
            <Text>22 doctors available</Text>
            <View style={styles.viewBtn}>
              <Button title="View" />
            </View>
          </View>
        </View>

        <View style={styles.specContRight}>
          <View style={styles.focusContainer}>
            <Image style={styles.specImage2}
              source={require('../assets/urologist.jpg')}></Image>
            <Text style={styles.specLabel}>Urologist</Text>
            <Text>4 doctors available</Text>
            <View style={styles.viewBtn}>
              <Button title="View" />
            </View>
          </View>
        </View>

        <View style={styles.specContLeft}>
          <View style={styles.focusContainer}>
            <Image style={styles.specImage7}
              source={require('../assets/consultant.jpg')}></Image>
            <Text style={styles.specLabel}>Consultant</Text>
            <Text>18 doctors available</Text>
            <View style={styles.viewBtn}>
              <Button title="View" />
            </View>
          </View>
        </View>

      </ScrollView>

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
  },
  ScrollView: {
    marginHorizontal: 5,
    height: 550
  },
  specContLeft: {
    width: 170,
    height: 170,
    marginLeft: 15,
    marginTop: 15,
    borderColor: "#1e90ff",
    borderWidth: 2
  },
  specContRight: {
    width: 170,
    height: 170,
    marginLeft: 200,
    marginTop: -170,
    borderColor: "#1e90ff",
    borderWidth: 2
  },
  focusContainer: {
    alignItems: 'center',
  },
  specImage1: {
    width: 80,
    height: 80,
  },
  specLabel: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  viewBtn: {
    marginTop: 7,
    width: 166
  },
  specImage2: {
    marginTop: 10,
    marginBottom: 5,
    width: 65,
    height: 65,
  },
  specImage3: {
    marginTop: 15,
    marginBottom: 5,
    width: 60,
    height: 60,
  },
  specImage5: {
    marginTop: 15,
    marginBottom: 5,
    width: 60,
    height: 60,
  },
  specImage7: {
    marginTop: 15,
    marginBottom: 5,
    width: 60,
    height: 60,
  }
});
