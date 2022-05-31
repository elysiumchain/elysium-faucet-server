import express, { Request, Response } from "express";
import { Container } from "typedi";
import FaucetService from "../services/faucet";

const router = express.Router();

router.post("/recaptcha", async (req: Request, res: Response) => {
    const token = req.query.token;

    const FaucetServiceInstance = Container.get(FaucetService);

    if (typeof token !== "string") {
        return res.status(400).json({ message: "token must be string type." });
    } else {
        const { code, message, data } = await FaucetServiceInstance.recaptcha(token);

        return res.status(code).json({ message, data });
    }
});

export default router;