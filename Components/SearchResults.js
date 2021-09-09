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

export default function SearchResults() {
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

            <View style={styles.sideContainer}></View>
            <View style={styles.detailContainer}>
                <Text style={styles.dateTime}>Thursday, September 03, 2021</Text>
                <Text >3.00 p.m to 5.00 p.m</Text>
                <Text >Asiri Hospital - Kandy</Text>
                <Text >Patient Count :</Text>
                <Button title="Search"/>
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
        alignItems: 'center',
        marginTop: 5,
        height: 120,
        width: 10,
        marginLeft: 10,
        backgroundColor: "#1e90ff"
    },
    detailContainer: {
        display: 'flex',
        backgroundColor: "white",
        height: 120,
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
    }
});
