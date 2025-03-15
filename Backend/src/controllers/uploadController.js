const aws = require("aws-sdk");
const dotenv = require("dotenv");
const { nanoid } = require("nanoid");
dotenv.config();
//setting up s3 bucket
const s3 = new aws.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const generateUpLoadURL = async () => {
    const date = new Date();
    const imageName = `${nanoid()}-${date.getTime()}.jpeg`;

    return await s3.getSignedUrlPromise("putObject", {
        Bucket: "blog-website-01",
        Key: imageName,
        Expires: 1000,
        ContentType: "image/jpeg",
    });
};

const uploadController = {
    getUploadURL: (req, res) => {
        generateUpLoadURL()
            .then((url) => {
                res.status(200).json({ uploadUrl: url });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({ error: err.message });
            });
    },
};

module.exports = uploadController;
