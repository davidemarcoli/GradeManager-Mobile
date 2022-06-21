import LoginScreen from "../components/screens/LoginScreen";
import useCachedResources from "../hooks/useCachedResources";
import {useColorScheme, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navbar from "../components/organisms/Navbar";
import ExamsScreen from "../components/screens/ExamsScreen";
import GoalsScreen from "../components/screens/GoalsScreen";
import GradesScreen from "../components/screens/GradesScreen";
import SettingsScreen from "../components/screens/SettingsScreen";
import RegisterScreen from "../components/screens/RegisterScreen";

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

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <NavigationContainer theme={theme}>
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
            </NavigationContainer>
        );
    }
}
