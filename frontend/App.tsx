import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import IconButton from "./components/atoms/IconButton";
import {View} from "react-native";
import TextField from "./components/atoms/TextField";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <><View style={{width: '100%', height: '100%', alignContent: "center", justifyContent: "center"}}>
            <View style={{width: '50%', height: '15%', alignSelf: "center"}}>
                <IconButton onPress={() => console.log("clicked")} backgroundColor={"#6C63FF"}
                            text={{text: "Login", color: "white", size: 20, weight: "bold"}}
                            borderRadius={10} border={{color: "grey", width: 1}}
                            icon={{name: "google", size: "extraLarge", padding: 10, color: "white"}}/>
            </View>
        </View></>
    );
  }
}
