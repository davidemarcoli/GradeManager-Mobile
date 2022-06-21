import AsyncStorage from '@react-native-async-storage/async-storage';

const storeKey = '@darkMode'

export const storeTheme = async (value: boolean) => {
    try {
        console.log('storeTheme', value)
        await AsyncStorage.setItem(storeKey, JSON.stringify(value))
    } catch (e) {
        // saving error
    }
}


export const getTheme = async (): Promise<boolean> => {
    try {
        const value = JSON.parse(<string>await AsyncStorage.getItem(storeKey))
        console.log("getTheme", value)
        if (value !== null) {
            return value
        }

        await storeTheme(false)
        return false

    } catch (e) {
        return false;
    }
}