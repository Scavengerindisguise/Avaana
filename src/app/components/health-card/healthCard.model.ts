import { ratingModel } from "./rating.model";

export class HealthCardModel {
    id: number;
    title: string;
    location: string;
    type: string;
    price: string;
    date: number;
    wishlist: boolean;
    ratingList: ratingModel[];
}