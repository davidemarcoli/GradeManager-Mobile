import { Image, TouchableOpacity, View} from "react-native";
import * as Linking from 'expo-linking';
import TextField from "../atoms/TextField";
import IconButton from "../atoms/IconButton";
import CustomCard from "../atoms/CustomCard";
import React, {useEffect, useState} from "react";
import {useTheme} from "react-native-paper";
import {User} from "../../models/User";
import {getUser} from "../../services/UserService";

type ProfileCardProps = {
    user: User;
}

export default function ProfileCard() {

    const theme = useTheme();

    const [user, setUser] = useState<User>()

    useEffect(() => {
        getUser().then(value => {
            if (value) {
                setUser(value)
            }
        })
    }, [])

    if (!user) return <View></View>

    return (
        <CustomCard borderRadius={15}>
            <Image style={{width: 100, height: 100, borderRadius: 50, alignSelf: "center", marginTop: -50}}
                   source={require("../../assets/images/bitmoji.png")}></Image>
            <TextField marginTop={10} text={user.name} textSize={20} fontWeight={"bold"}></TextField>

            <TouchableOpacity onPress={() => {
                Linking.openURL("mailto:" + user?.email)
            }}>
                <TextField marginTop={5} text={user.email} opacity={0.75}
                           textSize={15}></TextField>
            </TouchableOpacity>
            <View style={{
                borderBottomColor: theme.colors.text,
                borderBottomWidth: 2,
                width: "75%",
                alignSelf: "center",
                marginTop: 10,
                opacity: 0.25
            }}></View>

            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
                <IconButton onPress={() => {
                }} text={{text: "X Schools", color: theme.colors.text, size: 12, opacity: 0.7}} icon={{
                    name: "corporate-fare",
                    size: "medium",
                    iconType: "MaterialIcons",
                    color: theme.colors.text,
                    opacity: 0.7
                }} backgroundColor={theme.colors.navbarBackground} sameRow={false}></IconButton>
                <IconButton onPress={() => {
                }} text={{text: "X Subjects", color: theme.colors.text, size: 12}} icon={{
                    name: "menu-book",
                    size: "medium",
                    iconType: "MaterialIcons",
                    color: theme.colors.text,
                    opacity: 0.7
                }} backgroundColor={theme.colors.navbarBackground} sameRow={false}></IconButton>
                <IconButton onPress={() => {
                }} text={{text: "XX Exams", color: theme.colors.text, size: 12}} icon={{
                    name: "file-document-edit",
                    size: "medium",
                    iconType: "MaterialCommunityIcons",
                    color: theme.colors.text,
                    opacity: 0.7
                }} backgroundColor={theme.colors.navbarBackground} sameRow={false}></IconButton>

            </View>
        </CustomCard>
    )
}