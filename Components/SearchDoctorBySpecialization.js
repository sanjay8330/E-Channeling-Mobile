import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView, 
} from "react-native";

export default function SearchDoctorBySpecialization() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>E-channelling - Search Doctor Specialization</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
