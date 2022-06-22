import { Image, TouchableOpacity, View} from "react-native";
import * as Linking from 'expo-linking';
import TextField from "../atoms/TextField";
import IconButton from "../atoms/IconButton";
import CustomCard from "../atoms/CustomCard";
import React from "react";
import {useTheme} from "react-native-paper";
import {User} from "../../models/User";

type ProfileCardProps = {
    user: User;
}

export default function ProfileCard(user: User) {

    const theme = useTheme();


    return (
        <CustomCard borderRadius={15}>
            <Image style={{width: 100, height: 100, borderRadius: 50, alignSelf: "center", marginTop: -50}} source={require("../../assets/images/bitmoji.png")}></Image>
            <TextField marginTop={10} text={"Lazar Petrovic"} textSize={20} fontWeight={"bold"}></TextField>

            <TouchableOpacity onPress={() => {Linking.openURL("mailto:lazar.petrovic.nefti@gmail.com")}}>
                <TextField marginTop={5} text={"lazar.petrovic.nefti@gmail.com"} opacity={0.75} textSize={15}></TextField>
            </TouchableOpacity>
            <View style={{borderBottomColor: theme.colors.text, borderBottomWidth: 2, width: "75%", alignSelf: "center", marginTop: 10, opacity: 0.25}}></View>

            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
                <IconButton onPress={() => {}} text={{text: "2 Schools", color: theme.colors.text, size: 12, opacity: 0.7}} icon={{name: "corporate-fare", size: "medium", iconType: "MaterialIcons", color: theme.colors.text, opacity: 0.7}} backgroundColor={theme.colors.navbarBackground} sameRow={false}></IconButton>
                <IconButton onPress={() => {}} text={{text: "7 Subjects", color: theme.colors.text, size: 12}} icon={{name: "menu-book", size: "medium", iconType: "MaterialIcons", color: theme.colors.text, opacity: 0.7}} backgroundColor={theme.colors.navbarBackground} sameRow={false}></IconButton>
                <IconButton onPress={() => {}} text={{text: "21 Exams", color: theme.colors.text, size: 12}} icon={{name: "file-document-edit", size: "medium", iconType: "MaterialCommunityIcons", color: theme.colors.text, opacity: 0.7}} backgroundColor={theme.colors.navbarBackground} sameRow={false}></IconButton>

            </View>
        </CustomCard>
    )
}