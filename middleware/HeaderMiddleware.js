const { UNAUTHORIZED } = require("../constants/Status");
const { VerifyToken } = require("../libs/JwtToken");

const VerifyHeaderToken = async (req, res, next) => {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(UNAUTHORIZED).json({
			success: false,
			error: true,
			message: "Unauthorized User",
		});
	}

	const verifyToken = await VerifyToken(token.split(" ")[1]);

	if (!verifyToken) {
		return res.status(UNAUTHORIZED).json({
			success: false,
			error: true,
			message: "Unauthorized User",
		});
	}
	req.body.tokenData = verifyToken;
	next();
};

module.exports = VerifyHeaderToken