import {Switch, Text, useTheme} from "react-native-paper";
import {PreferencesContext} from "../../theme/PreferencesContext";
import React, {useEffect, useState} from "react";
import {Image, LogBox, StyleSheet, View} from "react-native";
import IconButton from "../atoms/IconButton";
import {useNavigation} from "@react-navigation/native";
import TextInputField from "../atoms/TextInputField";
import {User} from "../../models/User";
import {editUser, getUser, storeUser} from "../../services/UserService";

LogBox.ignoreLogs([
    'source.uri should not be an empty string',
]);

type EditProfilePictureScreenProps = {
    currentProfilePictureUrl: string;
}

export default function EditProfilePictureScreen({currentProfilePictureUrl}: EditProfilePictureScreenProps) {

    const theme = useTheme()
    const navigation = useNavigation()

    const [user, setUser] = useState<User>()
    const [isValidPicture, setIsValidPicture] = useState<boolean>()

    useEffect(() => {
        getUser().then(value => {
            if (value) {
                setUser(value)
            }
        })
    }, [])

    useEffect(() => {
        fetch(user?.profilePictureUrl!, {
            method: "GET",
        }).then(value => {
            setIsValidPicture(true)
        }).catch(reason => {
            setIsValidPicture(false)
        })
    }, [user])


    function changeProfilePicture() {
        fetch(user?.profilePictureUrl!, {
            method: "GET",
        }).then(value => {
            editUser(user!).then(response => {
                response.json().then(newUser => {
                    storeUser(newUser).then(value1 => {
                        navigation.navigate("Profile")
                    })
                })
            })
        })
    }


    if (!user) return <View></View>

    return (
        <><View style={styles.backIcon}><IconButton onPress={() => navigation.navigate("Profile")} icon={{
            name: "arrow-back",
            iconType: "MaterialIcons",
            color: theme.colors.text,
            size: "extraLarge"
        }} backgroundColor={theme.colors.background}></IconButton></View>

            <View style={{height: "100%", justifyContent: "center", alignItems: "center"}}>
                <View>
                    {!isValidPicture &&
                        <Image style={{width: 100, height: 100, borderRadius: 50, alignSelf: "center"}}
                               source={require("../../assets/images/pp_not_found.png")}></Image>}
                    {isValidPicture &&
                        <Image style={{width: 100, height: 100, borderRadius: 50, alignSelf: "center"}}
                               source={{uri: user.profilePictureUrl}}></Image>}
                </View>

                <View style={{width: "90%"}}>
                    <TextInputField
                        label={"New Profile Picture Url"}
                        defaultValue={user.profilePictureUrl}
                        onChangeText={(value: string) =>
                            setUser({
                                ...user,
                                profilePictureUrl: value
                            })
                        }
                        marginTop={20}
                        mainIcon={{
                            name: "file-document-outline",
                            size: "medium",
                            color: theme.colors.text,
                        }}
                    ></TextInputField>

                    <IconButton
                        opacity={isValidPicture ? 1 : 0.4}
                        disabled={!isValidPicture}
                        marginTop={30}
                        height={50}
                        borderRadius={30}
                        onPress={() => {
                            changeProfilePicture();
                        }}
                        text={{ text: "Change Profile Picture", weight: "bold" }}
                        backgroundColor={theme.colors.accent}
                    ></IconButton>

                </View>
            </View></>
    )
}

const styles = StyleSheet.create({
    backIcon: {
        position: "absolute",
        top: 40,
        left: 20,
    }
})