const {
	ServerError,
	SuccessResponse,
	NotFound,
} = require("../../constants/Response");
const { SERVER_ERROR, SUCCESS, NOT_FOUND } = require("../../constants/Status");
const userModel = require("../../models/userModel");

const VerifyUserToken = async (req, res) => {
	const { token } = req.query;
	if (!token) {
		return res.status(NOT_FOUND).json(NotFound);
	}
	try {
		const { token } = req.query;
		const findUser = await userModel.findOneAndUpdate(
			{ token },
			{ token: null, isverified: true }
		);
		if (!findUser) {
			return res.status(NOT_FOUND).json(NotFound);
		}

		return res
			.status(SUCCESS)
			.json(
				SuccessResponse(`${findUser.email} mail successfully verified`)
			);
	} catch (err) {
		console.log(err);
		return res.status(SERVER_ERROR).json(ServerError);
	}
};

module.exports = VerifyUserToken;
