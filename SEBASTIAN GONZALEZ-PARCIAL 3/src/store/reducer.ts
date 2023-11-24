import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state:AppState) => {

    const { action, payload } = actions;
    switch (action) {

        case SomeActions.SAVE_INFO:
            state.user = [...state.user, payload];
            return state;

        break;

        default:
            return state;
    }

};