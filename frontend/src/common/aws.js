import axios from "axios";

export const uploadImage = async (img) => {
    let imgUrl = null;
    await axios
        .get(process.env.REACT_APP_SERVER_DOMAIN + "/upload/get-upload-url")
        .then(async ({ data: { uploadUrl } }) => {
            await axios({
                method: "PUT",
                url: uploadUrl,
                headers: { "Content-type": "image/jpeg" },
                data: img,
            }).then(() => {
                imgUrl = uploadUrl.split("?")[0];
            });
        });

    return imgUrl;
};
