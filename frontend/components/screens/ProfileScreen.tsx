import TextField from "../atoms/TextField";
import {StyleSheet, View} from "react-native";
import ProfileCard from "../organisms/ProfileCard";
import React from "react";
import IconButton from "../atoms/IconButton";
import {logout} from "../../services/UserService";
import {useNavigation} from "@react-navigation/native";
import {useTheme} from "react-native-paper";

type ProfileScreenProps = {
    setIsLoggedIn: (value: boolean) => void
}

export default function ProfileScreen({setIsLoggedIn}: ProfileScreenProps) {

    const navigation = useNavigation()
    const theme = useTheme()

    return (
        <>
            <View style={styles.settingsIcon}><IconButton onPress={() => navigation.navigate("Settings")} icon={{
                name: "cog-outline",
                iconType: "MaterialCommunityIcons",
                color: theme.colors.text,
                size: "extraLarge"
            }} backgroundColor={theme.colors.background}></IconButton></View>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={{width: "80%", height: "30%", paddingTop: 20}}>
                    <ProfileCard/>
                </View>
                <View style={{width: "80%", height: "30%", paddingTop: 20}}>
                    <IconButton
                        onPress={async () => {
                            await logout()
                            navigation.navigate("Login")
                            setIsLoggedIn(false)

                        }
                        } text={{text: "LOGOUT", size: 20, weight: "bold"}} backgroundColor={"#8D0000"}
                        borderRadius={10}
                        border={{color: "black", width: 1}} height={50}></IconButton>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    settingsIcon: {
        position: "absolute",
        top: 40,
        right: 20,
    }
})