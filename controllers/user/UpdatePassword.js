const Status = require("../../constants/Status");
const Response = require("../../constants/Response");
const userModel = require("../../models/userModel");
const { GenerateHashPassword } = require("../../libs/HashPassword");

const UpdatePassword = async (req, res) => {
	const { token } = req.query;
	const { password } = req.body;
	if (!token) {
		return res.status(Status.NOT_FOUND).json(Response.NotFound);
	}

	try {
		const hashPass = await GenerateHashPassword(password);
		const updateUser = await userModel.findOneAndUpdate(
			{ token },
			{ token: null, password: hashPass }
		);

		if (!updateUser) {
			return res.status(Status.NOT_FOUND).json(Response.NotFound);
		}

		return res
			.status(Status.SUCCESS)
			.json(Response.SuccessResponse("Password successfully updated"));
	} catch (err) {
		return res.status(Status.SERVER_ERROR).json(Response.ServerError);
	}
};

module.exports = UpdatePassword
