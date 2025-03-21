import axios from "axios";

export const filterPaginationData = async ({
    create_new_arr = false,
    data,
    state,
    page,
    countRoute,
    data_to_send = {},
}) => {
    let obj;

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
                data_to_send
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
