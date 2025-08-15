import { FETCH_USERS_INPROGRESS } from "./usersActionsTypes";
import { FETCH_USERS_SUCCESS } from "./usersActionsTypes";
import { FETCH_USERS_ERROR } from "./usersActionsTypes";

export const fetchUsersInProgress = () => {
    return {
        type: FETCH_USERS_INPROGRESS
    };
};

export const fetchUsersSucces = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        users: users
    };
};

export const fetchUsersError = error => {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    };
};
