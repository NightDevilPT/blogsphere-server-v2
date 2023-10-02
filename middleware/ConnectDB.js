const mongoose = require("mongoose");
const status = require("../constants/Status");
const handler = require("../constants/Response");
const config = require("../config");

exports.ConnectDatabase = async (request, response, next) => {
	try {
		await mongoose.connect(config.MONGODB_URL);
		next();
	} catch (err) {
		return response
			.status(status.DATABASE_ERROR)
			.json(handler.DatabaseErrorResponse);
	}
};
