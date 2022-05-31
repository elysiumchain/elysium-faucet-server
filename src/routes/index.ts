import express, { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import FaucetController from "../controllers/faucet";

dotenv.config();

const router = express.Router()

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: "success",
        version: process.env.npm_package_version,
        data: "ok"
    })
});
router.use(FaucetController);

export default router;