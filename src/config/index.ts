import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    google: {
        recapcha: process.env.RECAPTCHA_SECRETKEY
    }
}