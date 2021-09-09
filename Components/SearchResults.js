import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    Button,
    View,
    ScrollView
} from "react-native";

export default function SearchResults({ navigation }) {
    //Onpress Handler
    const pressHandler = () => {
        navigation.navigate('fixAppointment');
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.home}>
                <Image style={styles.image}
                    source={require('../assets/home.png')}></Image>
            </View>

            <Text style={styles.title}>E-channelling - Sri Lanka</Text>

            <Text style={styles.phrase}>"Channel doctors with minimum clicks and maximum reliability"</Text>

            <Text style={styles.search}>Search Results</Text>

            <View style={styles.focusContainer}>
                <Image style={styles.docimage}
                    source={require('../assets/pro5.jpg')}></Image>

                <Text style={styles.doctorName}>Dr. Nimal Perera</Text>
                <Text style={styles.doctorSpec}>Cardiologist</Text>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.scheduleCont1}>
                    <View style={styles.sideContainer}></View>
                    <View style={styles.detailContainer}>
                        <Text style={styles.dateTime}>Thursday, September 03, 2021</Text>
                        <Text style={styles.time}>3.00 p.m to 5.00 p.m</Text>
                        <Text style={styles.location}>Asiri Hospital - Kandy</Text>
                        <Text style={styles.patientCount}>Patient Count :</Text>
                        <Text style={styles.patientNum}>15</Text>
                        <View style={styles.reserveBtn}>
                            <Button title="Reserve a slot" onPress={pressHandler} />
                        </View>
                    </View>
                </View>

                <View style={styles.scheduleCont2}>
                    <View style={styles.sideContainer}></View>
                    <View style={styles.detailContainer}>
                        <Text style={styles.dateTime}>Thursday, September 03, 2021</Text>
                        <Text style={styles.time}>6.00 p.m to 8.00 p.m</Text>
                        <Text style={styles.location}>CCC - Kandy</Text>
                        <Text style={styles.patientCount}>Patient Count :</Text>
                        <Text style={styles.patientNum}>42</Text>
                        <View style={styles.reserveBtn}>
                            <Button title="Reserve a slot" />
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
        borderColor: '#1e90ff'
    },
    image: {
        width: 30,
        height: 30,
        marginTop: 15,
        marginLeft: 15
    },
    container: {
        backgroundColor: "white"
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
    sideContainer: {
        display: 'flex',
        marginTop: 2,
        height: 130,
        width: 10,
        marginLeft: 10,
        backgroundColor: "#1e90ff",
        marginBottom: -10
    },
    detailContainer: {
        display: 'flex',
        backgroundColor: "white",
        height: 130,
        marginTop: -120,
        width: '90%',
        marginLeft: 20,
        borderWidth: 2,
        borderColor: '#1e90ff'
    },
    dateTime: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    time: {
        fontSize: 14,
        marginTop: 8,
        marginLeft: 10
    },
    location: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 14,
    },
    patientCount: {
        marginLeft: 220,
        marginTop: -42
    },
    reserveBtn: {
        marginTop: 20
    },
    patientNum: {
        marginLeft: 260,
        fontSize: 16
        //marginTop: -42
    },
    scheduleCont2: {
        marginTop: 15
    },
    scrollView: {
        //marginHorizontal: 5,
    }
});
