const { UpdatePasswordLink } = require("../../SendMail/UpdateSendLink");
const { ORIGIN } = require("../../config");
const { NotFound, ServerError } = require("../../constants/Response");
const { NOT_FOUND, SERVER_ERROR, SUCCESS } = require("../../constants/Status");
const { GenerateHashPassword } = require("../../services/HashPassword");
const userModel = require("../../models/userModel");

const ForgetPassword = async (req, res) => {
	try {
		const { email } = req.body;
		if (!email) {
			return res.status(NOT_FOUND).json(NotFound);
		}

		const token = await GenerateHashPassword(`${Date.now()}`);
		const findUser = await userModel.findOneAndUpdate({ email }, { token });

		if (!findUser) {
			return res.status(NOT_FOUND).json(NotFound);
		}

		const updateMail = await UpdatePasswordLink(
			findUser.email,
			findUser.username,
			`${ORIGIN}/auth/update-password?token=${token}`
		);

		return res.status(SUCCESS).json(updateMail);
	} catch (err) {
		console.log(err);
		return res.status(SERVER_ERROR).json(ServerError);
	}
};

module.exports = ForgetPassword;
