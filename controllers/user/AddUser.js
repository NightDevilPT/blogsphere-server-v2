const SendVerifyLink = require("../../SendMail/VerifySendMail");
const {
	ServerError,
	ExistResponse,
	SuccessResponse,
} = require("../../constants/Response");
const { ORIGIN } = require("../../config");
const { SERVER_ERROR, EXIST, CREATED } = require("../../constants/Status");
const FetchData = require("../../libs/FetchData");
const { GenerateHashPassword } = require("../../libs/HashPassword");
const userModel = require("../../models/userModel");

const AddUser = async (req, res) => {
	const { email, username, password } = req.body;
	try {
		const findUser = await FetchData(userModel, { email });
		if (findUser.length > 0) {
			return res.status(EXIST).json(ExistResponse);
		}
		const hashPass = await GenerateHashPassword(password);
		const token = await GenerateHashPassword(`${Date.now()}`);
		const addData = userModel.create({
			email,
			username,
			password: hashPass,
			token,
		});
		const sendMail = await SendVerifyLink(
			email,
			username,
			`${ORIGIN}?token=${token}`
		);
		return res.status(CREATED).json(sendMail);
	} catch (err) {
		console.log(err);
		return res.status(SERVER_ERROR).json(ServerError);
	}
};

module.exports = AddUser;
