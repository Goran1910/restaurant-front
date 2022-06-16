export class User {
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    role: string;
    constructor(username: string, password: string, email: string, phoneNumber: string, role: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }
}