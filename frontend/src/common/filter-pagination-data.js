import axios from "axios";

export const filterPaginationData = async ({
    create_new_arr = false,
    data,
    state,
    page,
    countRoute,
    data_to_send = {},
    user = undefined,
}) => {
    let obj;

    let headers = {};

    if (user) {
        headers.headers = {
            Authorization: `Bearer ${user}`,
        };
    }

    if (state !== null && !create_new_arr) {
        obj = {
            ...state,
            results: [...state.results, ...data],
            page: page,
        };
    } else {
        await axios
            .post(
                process.env.REACT_APP_SERVER_DOMAIN + countRoute,
                data_to_send,
                headers
            )
            .then(({ data: { totalDocs } }) => {
                obj = {
                    results: data,
                    page: 1,
                    totalDocs,
                };
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return obj;
};
