const jwt = require("jsonwebtoken");
const { EXPIRE_IN, PRIVATE_KEY } = require("../config");


const PRIVATE_KEY = PRIVATE_KEY;
const EXPIRE_IN = EXPIRE_IN


const GenerateToken = async (data) => {
    const token = await jwt.sign(data, PRIVATE_KEY, { expiresIn: EXPIRE_IN });
    return token;
}


const VerifyToken = async (token) => {
    try {
        const isVerifed = await jwt.verify(token, PRIVATE_KEY);
        return isVerifed;
    } catch (err) {
        return false;
    }
}


module.exports = {
    GenerateToken, VerifyToken
}