import { FETCH_USERS_INPROGRESS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../actions/usersActionsTypes";

const initialState = {
    inprogress: false,
    error: null,
    users: []
};

const usersReducer = (state = initialState, action) => {
    if (action.type === FETCH_USERS_INPROGRESS) {
        return {
            ...state,
            inprogress: true,
        };
    }
    
    else if (action.type === FETCH_USERS_SUCCESS) {
        return {
            ...state,
            inprogress: false,
            users: action.users
        };
    }

    else if (action.type === FETCH_USERS_ERROR) {
        return {
            ...state,
            inprogress: false,
            error: action.error
        };
    }

    return state;
};

export default usersReducer;
