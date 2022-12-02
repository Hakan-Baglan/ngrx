import { createReducer, on } from "@ngrx/store";
import { countIncrement } from "./counter-action";

export const initialCount = 0;

export const counterReducer = createReducer(
    initialCount,
    on(countIncrement, (state) => state += 1)
)