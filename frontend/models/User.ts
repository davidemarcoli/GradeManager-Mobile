export class User {
    id: string | undefined;
    email: string;
    password: string;
    name: string | undefined;

    constructor(id: string | undefined, email: string, password: string, name: string | undefined) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
    }
}