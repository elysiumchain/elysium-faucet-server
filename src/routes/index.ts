import express, { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import FaucetController from "../controllers/faucet";
import { logger } from "../config/winston";

dotenv.config();

const router = express.Router()

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    logger.info("GET /")
    res.status(200).json({
        message: "success",
        version: process.env.npm_package_version,
        data: "ok"
    })
});
router.use(FaucetController);

export default router;