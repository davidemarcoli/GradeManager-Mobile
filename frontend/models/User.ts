export class User {
  id: string | undefined;
  email: string;
  password: string | undefined;
  name: string | undefined;
  profilePictureUrl: string | undefined;

  constructor(
    id: string | undefined,
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
