const Status = require("../../constants/Status");
const Response = require("../../constants/Response");
const userModel = require("../../models/userModel");
const { GenerateHashPassword } = require("../../libs/HashPassword");
const { DeleteAccountMail } = require("../../SendMail/DeleteSendMail");
const { ORIGIN } = require("../../config");

const DeleteAccountRequest = async (req, res) => {
	const { tokenData } = req.body;
	const { _id } = tokenData;
	try {
		const token = await GenerateHashPassword(`${Date.now()}`);
		const findUser = await userModel.findByIdAndUpdate(_id, { token });
		if (!findUser) {
			return res.status(Status.NOT_FOUND).json(Response.NotFound);
		}
		const sendMail = await DeleteAccountMail(
			findUser.email,
			findUser.username,
			`${ORIGIN}/delete-account?token=${token}`
		);

		return res
			.status(Status.SUCCESS)
			.json(
				Response.SuccessResponse(
					`Delete account mail sended to ${findUser.email}`
				)
			);
	} catch (err) {
		return res.status(Status.SERVER_ERROR).json(Response.ServerError);
	}
};

const DeleteAccount = async (req, res) => {
	const { token } = req.query;
	if (!token) {
		return res.status(Status.NOT_FOUND).json(Response.NotFound);
	}

	try {
		const deleteUser = await userModel.findOneAndDelete({ token });
		if (!deleteUser) {
			return res.status(Status.NOT_FOUND).json(Response.NotFound);
		}

		return res
			.status(Status.SUCCESS)
			.json(
				Response.SuccessResponse(
					`${deleteUser.username} account successfully deleted.`
				)
			);
	} catch (err) {
		return res.status(Status.SERVER_ERROR).json(Response.ServerError);
	}
};

module.exports = { DeleteAccountRequest, DeleteAccount };
