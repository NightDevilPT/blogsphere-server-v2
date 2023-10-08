const {
	ServerError,
	NotFound,
	Unauthorized,
	SuccessResponse,
} = require("../../constants/Response");
const {
	SERVER_ERROR,
	NOT_FOUND,
	UNAUTHORIZED,
	SUCCESS,
} = require("../../constants/Status");
const { VerifyHashPassword } = require("../../libs/HashPassword");
const { GenerateToken } = require("../../libs/JwtToken");
const userModel = require("../../models/userModel");

const LoginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const findUser = await userModel.findOne({ email });
		if (!findUser) {
			return res.status(UNAUTHORIZED).json(Unauthorized);
		}

		const verifyPassword = await VerifyHashPassword(
			password,
			findUser.password
		);
		if (!verifyPassword) {
			return res.status(UNAUTHORIZED).json(Unauthorized);
		}

		const token = await GenerateToken({
			_id: findUser._id,
			email: findUser.email,
		});
		return res.status(SUCCESS).json(
			SuccessResponse({
				message: "successfully logined",
				token: token,
			})
		);
	} catch (err) {
		return res.status(SERVER_ERROR).json(ServerError);
	}
};

module.exports = LoginUser;
