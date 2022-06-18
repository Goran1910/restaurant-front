export class ManagerDTO {
    username: string;
    email: string;
    restaurantNames: string[];
    constructor(username: string, email: string, restaurantNames: string[]) {
        this.username = username;
        this.email = email;
        this.restaurantNames = restaurantNames;
    }
}