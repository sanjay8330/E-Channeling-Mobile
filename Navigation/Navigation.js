import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import SearchDoctorByName from '../Components/SearchDoctorByName';
import SearchDoctorBySpecialization from '../Components/SearchDoctorBySpecialization'; 
import SearchResults from "../Components/SearchResults";
import FixAppointment from "../Components/FixAppointment";
import ViewDoctors from '../Components/ViewDoctors';
import AppointmentConfirmation from "../Components/AppointmentConfirmation";
const screens = {
    searchDoctorUI1: {
        screen: SearchDoctorByName
    },
    searchDoctorUI2: {
        screen: SearchDoctorBySpecialization
    },
    searchResults: {
        screen: SearchResults 
    },
    fixAppointment: {
        screen: FixAppointment
    },
    viewDoctors: {
        screen: ViewDoctors
    },
    appointmentConfirm: {
        screen: AppointmentConfirmation
    }
}

const NavigationStack = createStackNavigator(screens);

export default createAppContainer(NavigationStack);