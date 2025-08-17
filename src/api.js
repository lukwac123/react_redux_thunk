export default {
    server: "https://reqres.in",
    headers: {
        "x-api-key": "reqres-free-v1"
    },
    route: {
        api: {
            users: {
                get: "/api/users?page=1",
            }
        }
    }
};
