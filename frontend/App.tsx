import React from "react";

import MaterialBottomTabNavigation from "./navigation/MaterialBottomTabNavigation";
import CustomNavigation from "./navigation/CustomNavigation";

import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import { PreferencesContext } from "./theme/PreferencesContext";

const navigationNumber = 2;

export default function App() {

    let CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
    let CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

    CombinedDarkTheme = merge(CombinedDarkTheme, {
        colors: {
            background: '#121212',
            navbarBackground: '#232323',
            accent: '#F46B45',
        }
    });

    CombinedDefaultTheme = merge(CombinedDefaultTheme, {
        colors: {
            background: '#E5E5E5',
            navbarBackground: '#FFFFFF',
            accent: '#F46B45',
        }
    });


    const [isThemeDark, setIsThemeDark] = React.useState(false);

    let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

    const toggleTheme = React.useCallback(() => {
        return setIsThemeDark(!isThemeDark);
    }, [isThemeDark]);


    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            isThemeDark,
        }),
        [toggleTheme, isThemeDark]
    );

    let navigation = null;

    if (navigationNumber === 1) {
        navigation = <MaterialBottomTabNavigation theme={theme}/>;
    } else if (navigationNumber === 2) {
        navigation = <CustomNavigation theme={theme}/>;
    }

    console.log(theme);

    return (
        <>
            <PreferencesContext.Provider value={preferences}>
                <PaperProvider theme={theme}>
                    {navigation}
                </PaperProvider>
            </PreferencesContext.Provider>
        </>
    );
}
