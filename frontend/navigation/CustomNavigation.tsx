import LoginScreen from "../components/screens/LoginScreen";
import useCachedResources from "../hooks/useCachedResources";
import { LogBox, useColorScheme, View } from "react-native";
import {
  NavigationContainer,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "../components/organisms/Navbar";
import ExamsScreen from "../components/screens/ExamsScreen";
import GoalsScreen from "../components/screens/GoalsScreen";
import GradesScreen from "../components/screens/GradesScreen";
import SettingsScreen from "../components/screens/SettingsScreen";
import RegisterScreen from "../components/screens/RegisterScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import { doesUserExist } from "../services/UserService";
import GradesOverviewScreen from "../components/screens/GradesOverviewScreen";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const Stack = createNativeStackNavigator();

type ThemeProps = {
  theme: any;
};

export default function CustomNavigation({ theme }: ThemeProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const isLoadingComplete = useCachedResources();

  const navbarElements: { iconName: string; text: string; route: string }[] = [
    { iconName: "calendar-month-outline", text: "Exams", route: "Exams" },
    { iconName: "flag-outline", text: "Goals", route: "Goals" },
    { iconName: "playlist-plus", text: "Grades", route: "Grades" },
    {
      iconName: "chart-bell-curve-cumulative",
      text: "Analytics",
      route: "Settings",
    },
    { iconName: "face-man-outline", text: "Profile", route: "Profile" },
  ];

  useEffect(() => {
    //console.log("Does User exist? ", doesUserExist())
    setIsLoggedIn(doesUserExist());
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={{ backgroundColor: theme.colors.backgroundColor }}>
        <View style={{ width: "100%", height: "100%" }}>
          <Stack.Navigator
            initialRouteName={"Login"}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Register">
              {(props) => (
                <RegisterScreen
                  {...props}
                  setIsLoggedIn={(value) => {
                    console.log("Set LoggedIn from Register to " + value);
                    setIsLoggedIn(value);
                  }}
                ></RegisterScreen>
              )}
            </Stack.Screen>
            <Stack.Screen name="Login">
              {(props) => (
                <LoginScreen
                  {...props}
                  setIsLoggedIn={(value) => {
                    console.log("Set LoggedIn Login to " + value);
                    setIsLoggedIn(value);
                  }}
                ></LoginScreen>
              )}
            </Stack.Screen>
            <Stack.Screen name="Exams" component={ExamsScreen} />
            <Stack.Screen name="Goals" component={GoalsScreen} />
            <Stack.Screen name="Grades" component={GradesOverviewScreen} />
            <Stack.Screen name="Profile">
              {(props) => (
                <ProfileScreen
                  {...props}
                  setIsLoggedIn={(value) => {
                    console.log("Set LoggedIn to " + value);
                    setIsLoggedIn(value);
                  }}
                ></ProfileScreen>
              )}
            </Stack.Screen>
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </View>
        {isLoggedIn && (
          <Navbar
            elements={navbarElements}
            activeColor={theme.colors.accent}
            inactiveColor={"#99A0AC"}
            backgroundColor={theme.colors.navbarBackground}
          ></Navbar>
        )}
      </View>
    );
  }
}
