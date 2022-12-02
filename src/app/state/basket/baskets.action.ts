import { createAction, props } from "@ngrx/store";
import { BasketModel } from "src/app/models/basket.model";

export const addBasket = createAction(
    "[Baskets] Add Basket",
    props<{"basket": BasketModel}>()
)