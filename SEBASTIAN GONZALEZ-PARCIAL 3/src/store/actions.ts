
import { user } from "../types/info";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const SaveInfoin = async (user: user): Promise<Actions> => {
 await firebase.SaveInfoin(user)

    return{
        action: SomeActions.SAVE_INFO,
        payload: user,
    };
};