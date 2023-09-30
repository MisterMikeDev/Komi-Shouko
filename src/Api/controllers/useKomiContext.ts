import { Request, Response, NextFunction } from "express";
import { Komi } from "../../Client";

/* eslint-disable */
declare global {
    namespace Express {
        interface Request {
            komi: Komi;
        }
    }
}
/* eslint-enable */

export const useKomiContext = (komi: Komi) => {
    return (req: Request, res: Response, next: NextFunction) => {
        req.komi = komi;
        next();
    };
};
