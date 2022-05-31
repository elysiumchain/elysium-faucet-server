import { Service } from "typedi";
import axios from "axios";
import env from "../config";

@Service()
export default class FaucetService {
    async recaptcha(token: string) {
        try {
            const data = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${env.google.recapcha}&response=${token}`);

            if (data.data.success) {
                return { code: 200, message: "success", data: data.data.success }
            } else {
                return { code: 400, message: "error", data: data.data["error-codes"] }
            }
        } catch (err) {
            return { code: 400, message: "error", data: err }
        }
    }
}