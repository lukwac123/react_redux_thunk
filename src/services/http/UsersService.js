import routes from"./../../api";
import { fetchUsersInProgres, fetchUsersSuccess, fetchUsersError } from "../../actions/usersAction";

const fetchAllUsers = () => {
    return dispatch => {
        dispatch(fetchUsersInProgres());
        fetch(routes.server + routes.route.api.users.get)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw res.error;
            }
            dispatch(fetchUsersSuccess(res.data));
            return res.users;
        })
        .catch(error => {
            dispatch(fetchUsersError(error));
        });
    };
};

export default fetchAllUsers;
