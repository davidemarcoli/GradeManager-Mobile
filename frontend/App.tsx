import React from "react";

import MaterialBottomTabNavigation from "./navigation/MaterialBottomTabNavigation";
import CustomNavigation from "./navigation/CustomNavigation";

const navigationNumber = 2;

export default function App() {

    if (navigationNumber === 1) {
        return <MaterialBottomTabNavigation />;
    } else if (navigationNumber === 2) {
        return <CustomNavigation />;
    }
}
