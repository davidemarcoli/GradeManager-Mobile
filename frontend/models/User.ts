export class User {
    id: string;
    email: string;
    password: string | undefined;
    name: string | undefined;
    profilePictureUrl: string | undefined;

    constructor(
        id: string,
        email: string,
        password: string | undefined,
        name: string | undefined,
        profilePictureUrl: string | undefined
    ) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.profilePictureUrl = profilePictureUrl;
    }
}
