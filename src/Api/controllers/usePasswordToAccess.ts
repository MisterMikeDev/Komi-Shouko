import { Request, Response, NextFunction } from "express";

export const usePasswordToAccess = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { password } = req.body;
    if (password === process.env.EXPRESS_SECRET) {
        next();
    } else {
        res.status(401).json({
            error: "No estás autorizado para acceder a esta API."
        });
    }
};
