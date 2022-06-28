import * as WebBrowser from 'expo-web-browser';


export function googleRegister() {

    WebBrowser.maybeCompleteAuthSession();


    // return fetch('http://10.0.2.2:8080/api/users/security/register', {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // });
}

export function googleLogin(email: string, password: string) {
    return fetch('http://10.0.2.2:8080/api/users/security/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    });
}