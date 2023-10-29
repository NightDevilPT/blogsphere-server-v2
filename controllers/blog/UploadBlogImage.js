const path = require("path");
const userModel = require("../../models/userModel");
const {
	SuccessResponse,
	UploadProfileErr,
	NotFound,
	ServerError,
} = require("../../constants/Response");
const { SUCCESS, SERVER_ERROR, NOT_FOUND } = require("../../constants/Status");
const UploadImageToFirebase = require("../../services/UploadImage");

const UploadBlogImage = async (req, res) => {
	const { email } = req.body;
	const file = { ...req.file };

	try {
		// <<===[ Uploading File with the name of userId ]===>>
		const filename = `blogs/${email}/${file.originalname}`;
		const imageLink = await UploadImageToFirebase(file, filename);

		return res
			.status(SERVER_ERROR)
			.json({ ...SuccessResponse("image uploaded"), link: imageLink });
	} catch (err) {
		return res.status(SERVER_ERROR).json(ServerError);
	}
};

module.exports = UploadBlogImage;
