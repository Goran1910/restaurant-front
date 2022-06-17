export class TableReservationRequest {
    private numOfPeople: number;
    private date: Date;
    private restaurantName: string;

    constructor(numOfPeople: number, date: Date, restaurantName: string) {
        this.numOfPeople = numOfPeople;
        this.date = date;
        this.restaurantName = restaurantName;
    }
}