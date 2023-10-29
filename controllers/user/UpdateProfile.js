const {
	NotFound,
	SuccessResponse,
	ServerError,
} = require("../../constants/Response");
const { NOT_FOUND, SUCCESS, SERVER_ERROR } = require("../../constants/Status");
const userModel = require("../../models/userModel");

const UpdateProfile = async (req, res) => {
	const data = req.body;
	const { _id } = data.tokenData;
	delete data.tokenData;

	try {
		const findUpdate = await userModel.findByIdAndUpdate(_id, { ...data });
		if (!findUpdate) {
			return res.status(NOT_FOUND).json(NotFound);
		}

		return res
			.status(SUCCESS)
			.json(SuccessResponse("Profile successfully updated."));
	} catch (err) {
		return res.status(SERVER_ERROR).json(ServerError);
	}
};

module.exports = UpdateProfile;
