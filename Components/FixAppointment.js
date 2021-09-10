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

export default function FixAppointment() {
    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.home}>
                <Image style={styles.image}
                    source={require('../assets/home.png')}></Image>
            </View>

            <Text style={styles.title}>E-channelling - Sri Lanka</Text>

            <Text style={styles.phrase}>"Channel doctors with minimum clicks and maximum reliability"</Text>

            <Text style={styles.search}>Fix Appointment</Text>

            <View style={styles.focusContainer}>
                <Image style={styles.docimage}
                    source={require('../assets/pro5.jpg')}></Image>

                <Text style={styles.doctorName}>Dr. Nimal Perera</Text>
                <Text style={styles.doctorSpec}>Cardiologist</Text>
            </View>

            <View style={styles.horizontalLine}></View>

            <View style={styles.scheduleContainer}>
                <Text style={styles.dateTime}>Thursday, September 03, 2021</Text>
                <Text style={styles.time}>3.00 p.m to 5.00 p.m</Text>
                <Text style={styles.location}>Asiri Hospital - Kandy</Text>
            </View>

            <View style={styles.horizontalLine2}></View>

            <Text style={styles.subHeading}>Enter your information</Text>

            <KeyboardAvoidingView behavior="padding" style={styles.keyboardcontainer}>
                <View style={styles.appointmentContainer}>
                    <Text style={styles.nameLabel}>Patient Name</Text>
                    <TextInput
                        style={styles.patientName}
                        placeholder="Patient Name"
                        keyboardType="default"
                    />
                    <Text style={styles.contactLabel}>Contact Number</Text>
                    <TextInput
                        style={styles.contactNumber}
                        placeholder="+94 7X XXX XXXX"
                        keyboardType="numeric"
                    />

                    <View style={styles.confirmBtn}>
                        <Button title="Confirm Appointment" />
                    </View>

                </View>
            </KeyboardAvoidingView>
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
        flex: 0
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
    focusContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        height: 200
    },
    docimage: {
        width: '30%',
        height: '78%',
    },
    doctorName: {
        textAlign: 'center',
        fontSize: 16,
    },
    doctorSpec: {
        textAlign: 'center',
        fontSize: 12,
    },
    horizontalLine: {
        backgroundColor: '#1e90ff',
        width: '100%',
        height: 10
    },
    scheduleContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 5
    },
    dateTime: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    time: {
        fontSize: 14,
        marginTop: 8
    },
    location: {
        marginTop: 5,
        fontSize: 14,
    },
    horizontalLine2: {
        backgroundColor: '#1e90ff',
        width: '95%',
        height: 5,
        marginTop: 5,
        marginLeft: 10
    },
    subHeading: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 16,
        textDecorationLine: 'underline'
    },
    appointmentContainer: {
        marginTop: 10,
        //flex: -10
    },
    nameLabel: {
        marginLeft: 10
    },
    patientName: {
        height: 40,
        width: "95%",
        borderWidth: 1,
        padding: 10,
        marginTop: 5,
        marginLeft: 10
    },
    contactLabel: {
        marginLeft: 10,
        marginTop: 10
    },
    contactNumber: {
        height: 40,
        width: "95%",
        borderWidth: 1,
        padding: 10,
        marginTop: 5,
        marginLeft: 10
    },
    confirmBtn: {
        marginTop: 20,
        width: '60%',
        marginLeft: 75
    },
    keyboardcontainer: {
        flex: -100
    }
});