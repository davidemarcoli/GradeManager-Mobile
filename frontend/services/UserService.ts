import {User} from "../models/User";

export async function register(user: User) {
    return fetch('localhost:8080/api/security/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}