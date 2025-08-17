import routes from "./../../api";
import { fetchUsersInProgress, fetchUsersSucces, fetchUsersError } from "../../actions/usersAction";

const fetchAllUsers = () => {
    return dispatch => {
        dispatch(fetchUsersInProgress());
        fetch(routes.server + routes.route.api.users.get, {
    headers: routes.headers
})
.then(res => {
    console.log("Status odpowiedzi:", res.status);
    return res.json();
})
.then(res => {
    console.log("Odpowiedź API:", res);
    dispatch(fetchUsersSucces(res.data));
})
.catch(error => {
    console.log("Błąd fetch:", error);
    dispatch(fetchUsersError(error.toString()));
});
    };
};

export default fetchAllUsers;