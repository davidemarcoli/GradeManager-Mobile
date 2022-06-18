import React from "react";
import TextField from "../atoms/TextField";
import { SvgXml } from 'react-native-svg';

export default function LoginScreen() {

    return (
        <>
            {/*<IconButton onPress={() => console.log("clicked")} backgroundColor={"#6C63FF"}
                        text={{text: "Login", color: "white", size: 20, weight: "bold"}}
                        borderRadius={10} border={{color: "grey", width: 1}}
                        icon={{name: "google", size: "extraLarge", padding: 10, color: "white"}}
                        sameRow={true}/>*/}
            <TextField text={"Hallo"}></TextField>
        </>
    )

}