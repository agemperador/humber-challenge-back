import { verifyToken } from "../utils/crypt.js";

export const tokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token inexistente" });
    }
    try {
        req.user = verifyToken(token); ; 
        next(); 
    } catch (error) {
        return res.status(401).json({ message: "Token inválido" });
    }
};