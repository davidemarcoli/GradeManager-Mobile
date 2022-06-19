import React from 'react';

export const PreferencesContext = React.createContext({
    toggleTheme: () => {
        console.log('toggleTheme');
    },
    isThemeDark: false,
});