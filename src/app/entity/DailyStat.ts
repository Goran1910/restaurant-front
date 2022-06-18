export class DailyStat {
    numOfPeople: number;
    numOfReservations: number;
    day: number;
    restaurantName: string;

    constructor(numOfPeople: number, numOfReservations: number, day: number, restaurantName: string){
        this.numOfPeople = numOfPeople;
        this.numOfReservations = numOfReservations;
        this.day = day;
        this.restaurantName = restaurantName;
    }
}