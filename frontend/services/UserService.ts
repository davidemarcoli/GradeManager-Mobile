import {User} from "../models/User";

export function register(user: User) {
    return fetch('http://10.0.2.2:8080/api/users/security/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

export function login(email: string, password: string) {
    return fetch('http://10.0.2.2:8080/api/users/security/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    });
}