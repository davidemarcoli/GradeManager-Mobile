import React, {useEffect} from "react";

import MaterialBottomTabNavigation from "./navigation/MaterialBottomTabNavigation";
import CustomNavigation from "./navigation/CustomNavigation";

import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme, NavigationContainer, useNavigation,
} from '@react-navigation/native';
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import { PreferencesContext } from "./theme/PreferencesContext";
import {getTheme, storeTheme} from "./services/ThemeStorageService";

const navigationNumber = 2;

export default function App() {

    let CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
    let CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

    CombinedDarkTheme = merge(CombinedDarkTheme, {
        colors: {
            background: '#121212',
            navbarBackground: '#232323',
            accent: '#F46B45',
            // accent: '#4f8a36',
            secondaryAccent: '#6C63FF',
        }
    });

    CombinedDefaultTheme = merge(CombinedDefaultTheme, {
        colors: {
            background: '#E5E5E5',
            navbarBackground: '#FFFFFF',
            accent: '#F46B45',
            // accent: '#4f8a36',
            secondaryAccent: '#6C63FF',
        }
    });


    const [isThemeDark, setIsThemeDark] = React.useState(false);

    useEffect(() => {
        getTheme().then(theme => {
            if (theme) {
                setIsThemeDark(theme);
            }
        });
    }, []);


    let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

    const toggleTheme = React.useCallback(() => {
        storeTheme(!isThemeDark).then(r => {
            console.log("Theme saved.");
            return setIsThemeDark(!isThemeDark);
        });
    }, [isThemeDark]);


    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            isThemeDark,
        }),
        [toggleTheme, isThemeDark]
    );

    let navigationComponent = null;

    if (navigationNumber === 1) {
        navigationComponent = <MaterialBottomTabNavigation theme={theme}/>;
    } else if (navigationNumber === 2) {
        navigationComponent = <CustomNavigation theme={theme}/>;
    }

/*
    console.log(theme);
*/

    return (
        <>
            <PreferencesContext.Provider value={preferences}>
                <PaperProvider theme={theme}>
                    <NavigationContainer theme={theme}>
                        {navigationComponent}
                    </NavigationContainer>
                </PaperProvider>
            </PreferencesContext.Provider>
        </>
    );
}
