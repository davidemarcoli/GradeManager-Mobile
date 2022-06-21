import React from "react";
import {View} from "react-native";
import TextField from "../atoms/TextField";
import TextInputField from "../atoms/TextInputField";

export default function GoalsScreen() {
    const [data, setData] = React.useState({
        username: "",
        password: "",
    });
    return (
        <View style={{flex: 1, justifyContent: "center"}}>
            <TextField text={"Goals"}></TextField>
            <TextInputField
                label={"Password"}
                secureTextEntry={true}
                defaultValue={data.password}
                onChangeText={(value: string) =>
                    setData({
                        ...data,
                        password: value,
                    })
                }
                marginTop={20}
                icon={{}}
            ></TextInputField>
        </View>
    );
}
