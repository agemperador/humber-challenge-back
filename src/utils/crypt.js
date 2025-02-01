import crypto from "crypto";
import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.SECRET_KEY;
const ENCRYPTION_KEY = crypto.randomBytes(32); 
const IV = crypto.randomBytes(16); 


export const generateToken = (obj) => {
    return jwt.sign(obj, SECRET_KEY, { expiresIn: "1500h" });
}


export const decryptObject = (encryptedData) => {
    return jwt.decode(encryptedData);
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);        
        return decryptObject(token, decoded.iv);
    } catch (error) {
        console.error("Token inválido:", error.message);
        return null;
    }
}

