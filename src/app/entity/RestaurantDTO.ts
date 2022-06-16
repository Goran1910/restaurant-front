export class RestaurantDTO {
    name: string;
    imagePath: string;
    averageRating: number;
    yourRating: number;
    constructor(name: string, imagePath: string, averageRating: number, yourRating: number) {
        this.name = name;
        this.imagePath = imagePath;
        this.averageRating = averageRating;
        this.yourRating = yourRating;
    }
}