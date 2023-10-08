const { SuccessResponse, ServerError } = require("../../constants/Response");
const { SUCCESS, SERVER_ERROR } = require("../../constants/Status");
const userModel = require("../../models/userModel");

const GetProfile = async (req, res) => {
	const { tokenData } = req.body;
	try {
		const findUser = await userModel.findById(tokenData._id, {
			password: 0,
			isverified: 0,
			token: 0,
		});
		return res.status(SUCCESS).json({
			success: true,
			error: false,
			data: findUser,
		});
	} catch (err) {
		return res.status(SERVER_ERROR).json(ServerError);
	}
};

module.exports = GetProfile;
