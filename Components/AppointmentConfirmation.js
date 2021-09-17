import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    Button,
    View,
    TextInput,
    KeyboardAvoidingView
} from "react-native";

export default function AppointmentConfirmation() {
    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.circle1}></View>
            <View style={styles.circle2}></View>

            <Image style={styles.logo}
                source={require('../assets/logo.jpg')}></Image>

            <Text style={styles.messageLine1}>Your appointment</Text>
            <Text style={styles.messageLine2}>is confirmed</Text>

            <Image style={styles.doneImg}
                source={require('../assets/done2.png')}></Image>

        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 0
    },
    circle1: {
        height: 200,
        width: 200,
        borderRadius: 165,
        backgroundColor: "#87cefa",
        marginTop: -70,
        marginLeft: -80
    },
    circle2: {
        height: 200,
        width: 200,
        borderRadius: 165,
        backgroundColor: "#f08080",
        marginTop: -260,
        marginLeft: -10
    },
    logo: {
        width: 250,
        height: 120,
        marginTop: 50,
        marginLeft: 60
    },
    messageLine1: {
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
    messageLine2: {
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: 'bold',
        textAlign: 'center',
    },
    doneImg: {
        width: 120,
        height: 120,
        marginTop: 15,
        marginLeft: 125
    }
});