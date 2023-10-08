const path = require("path");
const userModel = require("../../models/userModel");
const { UploadImageToFirebase } = require("../../libs/UploadImage");
const {
	SuccessResponse,
	UploadProfileErr,
	NotFound,
} = require("../../constants/Response");
const { SUCCESS, SERVER_ERROR, NOT_FOUND } = require("../../constants/Status");

const UploadProfile = async (req, res) => {
	const { tokenData } = req.body;
	const { _id } = tokenData;
	const file = { ...req.file };

	try {
		// <<===[ Uploading File with the name of userId ]===>>
		const filename = `avtar/${_id}.${path
			.extname(file.originalname)
			.toLowerCase()}`;
		const imageLink = await UploadImageToFirebase(file, filename);

		if (imageLink) {
			// <<===[ Saving data in DB with image avtar ]===>>
			const update = await userModel.findByIdAndUpdate(_id, {
				avtar: imageLink,
			});

			if (!update) {
				return res.status(NOT_FOUND).json(NotFound);
			}
			return res
				.status(SUCCESS)
				.json(SuccessResponse("Profile successfully uploaded."));
		}

		return res.status(SERVER_ERROR).json(UploadProfileErr);
	} catch (err) {
		return res.send(err);
	}
};

module.exports = UploadProfile;
