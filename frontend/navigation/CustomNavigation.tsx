import LoginScreen from "../components/screens/LoginScreen";
import useCachedResources from "../hooks/useCachedResources";
import {useColorScheme, View} from "react-native";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navbar from "../components/organisms/Navbar";
import ExamsScreen from "../components/screens/ExamsScreen";
import GoalsScreen from "../components/screens/GoalsScreen";
import GradesScreen from "../components/screens/GradesScreen";
import SettingsScreen from "../components/screens/SettingsScreen";
import RegisterScreen from "../components/screens/RegisterScreen";
import {getUser, login, plainLogin, storeUser} from "../services/UserService";
import {User} from "../models/User";

const Stack = createNativeStackNavigator();

type ThemeProps = {
    theme: any;
};

export default function CustomNavigation({theme}: ThemeProps) {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const navbarElements: { iconName: string; text: string; route: string }[] = [
        {iconName: "calendar-month-outline", text: "Exams", route: "Exams"},
        {iconName: "flag-outline", text: "Goals", route: "Register"},
        {iconName: "playlist-plus", text: "Grades", route: "Grades"},
        {
            iconName: "chart-bell-curve-cumulative",
            text: "Analytics",
            route: "Login",
        },
        {iconName: "face-man-outline", text: "Profile", route: "Settings"},
    ];

    const navigation = useNavigation();

    useEffect(() => {
        getUser().then(value => {
            if (!value) {
                navigation.navigate("Login")
                return
            }

            const savedUser = value as User;

            plainLogin(savedUser.email, savedUser.password)
                .then((response) => {
                    if (response.ok) {
                        response.json().then(data => {
                            console.log(data)
                            storeUser(data as User)
                            navigation.navigate("Exams");
                        })
                    } else {
                        response.text().then(text => {
                            console.error(text)
                            navigation.navigate("Login")
                        })
                    }

                    // console.error(JSON.stringify(response))
                })
                .catch(error => {
                    console.error(JSON.stringify(error));
                    navigation.navigate("Login")
                });
        })
    })

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={{backgroundColor: theme.colors.backgroundColor}}>
                <View style={{width: "100%", height: "100%"}}>
                    <Stack.Navigator
                        initialRouteName={"Login"}
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="Register" component={RegisterScreen}/>
                        <Stack.Screen name="Login" component={LoginScreen}/>
                        <Stack.Screen name="Exams" component={ExamsScreen}/>
                        <Stack.Screen name="Goals" component={GoalsScreen}/>
                        <Stack.Screen name="Grades" component={GradesScreen}/>
                        <Stack.Screen name="Settings" component={SettingsScreen}/>
                    </Stack.Navigator>
                </View>
                <Navbar
                    elements={navbarElements}
                    activeColor={theme.colors.accent}
                    inactiveColor={"#99A0AC"}
                    backgroundColor={theme.colors.navbarBackground}
                ></Navbar>
            </View>
        );
    }
}
