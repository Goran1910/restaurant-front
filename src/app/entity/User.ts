export class User {
    name: string;
    email: string;
    phoneNumber: string;
    role: string;
    constructor(name: string, email: string, phoneNumber: string, role: string) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }
}