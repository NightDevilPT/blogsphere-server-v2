const multer = require("multer");
const path = require("path");

const UploadMiddleware = multer({
	storage: multer.memoryStorage(),
	limits: { fileSize: 2 * 1000 * 1000 },
	fileFilter: async (req, file, cb) => {
		const fileType = /jpeg|jpg|png|gif/;
		const extName = fileType.test(
			path.extname(file.originalname).toLowerCase()
		);
		const mimeType = fileType.test(file.mimetype);
		if (mimeType && extName) {
			return cb(null, true);
		} else {
			cb("Error : Image Only");
		}
	},
});

module.exports = UploadMiddleware;
