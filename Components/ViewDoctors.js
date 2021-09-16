import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    Button,
    View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Stars from 'react-native-stars'

export default function ViewDoctors({ navigation }) {
    //Onpress Handler
    const pressHandler = () => {
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

            <Text style={styles.search}>List of Doctors - Cardiologist</Text>

            <ScrollView style={styles.ScrollView}>

                <View style={styles.scheduleCont1}>
                    <View style={styles.sideContainer}></View>
                    <View style={styles.detailContainer}>
                        <Image style={styles.docImage1}
                            source={require('../assets/pro3.jpg')}></Image>
                        <Text style={styles.doctorName}>Dr. Nimal Perera</Text>
                        <Text style={styles.doctorEdu}>(M.B.B.S)</Text>
                        <Text style={styles.doctorExp}>11 years of experience</Text>
                        <View style={styles.stars}>
                            <Stars
                                count={1}
                                starSize={20}
                                emptyStar={require('../assets/emptyStart.png')}
                                fullStar={require('../assets/fullStar.jpg')} />
                        </View>
                        <Text style={styles.rating}>4.3</Text>
                        <View style={styles.bookBtn}>
                            <Button title="View Schedule" onPress={pressHandler} />
                        </View>
                    </View>
                </View>

                <View style={styles.scheduleCont1}>
                    <View style={styles.sideContainer}></View>
                    <View style={styles.detailContainer}>
                        <Image style={styles.docImage1}
                            source={require('../assets/pro4.jpg')}></Image>
                        <Text style={styles.doctorName}>Dr. Sajith Bandara</Text>
                        <Text style={styles.doctorEdu}>(M.B.B.S)</Text>
                        <Text style={styles.doctorExp}>25 years of experience</Text>
                        <View style={styles.stars}>
                            <Stars
                                count={1}
                                starSize={20}
                                emptyStar={require('../assets/emptyStart.png')}
                                fullStar={require('../assets/fullStar.jpg')} />
                        </View>
                        <Text style={styles.rating}>4.3</Text>
                        <View style={styles.bookBtn}>
                            <Button title="View Schedule" />
                        </View>
                    </View>
                </View>

                <View style={styles.scheduleCont1}>
                    <View style={styles.sideContainer}></View>
                    <View style={styles.detailContainer}>
                        <Image style={styles.docImage1}
                            source={require('../assets/pro2.jpg')}></Image>
                        <Text style={styles.doctorName}>Dr. Shalini Fernando</Text>
                        <Text style={styles.doctorEdu}>(M.B.B.S)</Text>
                        <Text style={styles.doctorExp}>5 years of experience</Text>
                        <View style={styles.stars}>
                            <Stars
                                count={1}
                                starSize={20}
                                emptyStar={require('../assets/emptyStart.png')}
                                fullStar={require('../assets/fullStar.jpg')} />
                        </View>
                        <Text style={styles.rating}>3.9</Text>
                        <View style={styles.bookBtn}>
                            <Button title="View Schedule" />
                        </View>
                    </View>
                </View>

                <View style={styles.scheduleCont1}>
                    <View style={styles.sideContainer}></View>
                    <View style={styles.detailContainer}>
                        <Image style={styles.docImage1}
                            source={require('../assets/pro5.jpg')}></Image>
                        <Text style={styles.doctorName}>Dr. Ranjan Perera</Text>
                        <Text style={styles.doctorEdu}>(M.B.B.S)</Text>
                        <Text style={styles.doctorExp}>3 years of experience</Text>
                        <View style={styles.stars}>
                            <Stars
                                count={1}
                                starSize={20}
                                emptyStar={require('../assets/emptyStart.png')}
                                fullStar={require('../assets/fullStar.jpg')} />
                        </View>
                        <Text style={styles.rating}>3.5</Text>
                        <View style={styles.bookBtn}>
                            <Button title="View Schedule" />
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
        textDecorationLine: 'underline'
    },
    ScrollView: {
        marginHorizontal: 5,
        height: 550
    },
    scheduleCont1: {
        marginTop: 15
    },
    sideContainer: {
        display: 'flex',
        marginTop: 2,
        height: 150,
        width: 10,
        marginLeft: 10,
        backgroundColor: "#1e90ff",
        marginBottom: -10
    },
    detailContainer: {
        display: 'flex',
        backgroundColor: "white",
        height: 150,
        marginTop: -140,
        width: '90%',
        marginLeft: 20,
        borderWidth: 2,
        borderColor: '#1e90ff'
    },
    docImage1: {
        width: 100,
        height: 135,
        marginTop: 5,
        marginLeft: 5
    },
    doctorName: {
        marginTop: -135,
        marginLeft: 100,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    doctorEdu: {
        marginTop: 4,
        marginLeft: 115,
        fontSize: 13
    },
    doctorExp: {
        marginLeft: 115,
        marginTop: 5,
        fontWeight: 'bold'
    },
    stars: {
        marginTop: 10,
        marginLeft: -90
    },
    rating: {
        marginLeft: 140,
        marginTop: -20
    },
    bookBtn: {
        width: 150,
        marginTop: 2,
        marginLeft: 185
    },
    stars2: {
        marginTop: 10,
        marginLeft: -90
    }
});
