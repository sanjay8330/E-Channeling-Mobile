import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import SearchDoctorByName from '../Components/SearchDoctorByName';
import SearchDoctorBySpecialization from '../Components/SearchDoctorBySpecialization'; 

const screens = {
    searchDoctorUI1: {
        screen: SearchDoctorByName
    },
    searchDoctorUI2: {
        screen: SearchDoctorBySpecialization
    }
}

const NavigationStack = createStackNavigator(screens);

export default createAppContainer(NavigationStack);