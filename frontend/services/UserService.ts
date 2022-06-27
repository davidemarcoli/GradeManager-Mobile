import { User } from "../models/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function register(user: User) {
  return fetch("http://10.0.2.2:8080/api/users/security/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export function login(user: User) {
  return fetch("http://10.0.2.2:8080/api/users/security/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export function plainLogin(user: User) {
  return fetch("http://10.0.2.2:8080/api/users/security/plainLogin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

const storeKey = "@user";

export const storeUser = async (user: User) => {
  try {
    // console.log("storeUser", user);
    await AsyncStorage.setItem(storeKey, JSON.stringify(user));
  } catch (e) {
    // saving error
  }
};

export const getUser = async (): Promise<User | undefined> => {
  try {
    const user = JSON.parse(<string>await AsyncStorage.getItem(storeKey));
    // console.log("getUser", user);
    if (user !== null) {
      return user;
    }

    return undefined;
  } catch (e) {
    return undefined;
  }
};

// @ts-ignore
export const doesUserExist = (): boolean => {
  AsyncStorage.getItem(storeKey)
    .then((value) => {
      console.log("Does User exist? ", !!value);
      return !!value;
    })
    .catch((reason) => {
      console.log("Does User exist? false :(");
      return false;
    });
};

export const logout = async () => {
  try {
    console.log("logout");
    await AsyncStorage.removeItem(storeKey);
    //useNavigation().navigate("Login")
  } catch (e) {
    // saving error
  }
};
