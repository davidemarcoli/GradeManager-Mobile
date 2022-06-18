import React from "react";

import MaterialBottomTabNavigation from "./navigation/MaterialBottomTabNavigation";
import CustomNavigation from "./navigation/CustomNavigation";

import {
    Provider as PaperProvider,
} from 'react-native-paper';

const navigationNumber = 2;

export default function App() {

    let navigation = null;

    if (navigationNumber === 1) {
        navigation = <MaterialBottomTabNavigation />;
    } else if (navigationNumber === 2) {
        navigation = <CustomNavigation />;
    }

    return (
        <>
            <PaperProvider>
                {navigation}
            </PaperProvider>
        </>
    );
}
