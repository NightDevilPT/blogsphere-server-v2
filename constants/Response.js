const ServerError = {
	success: false,
	error: true,
	message: "Error : Internal Server Error",
};

const DatabaseErrorResponse = {
	success: false,
	error: true,
	message: "Error : Database connection error",
};

const SuccessResponse = (message) => {
	return {
		success: true,
		error: false,
		message,
	};
};

const ExistResponse = {
	success: true,
	error: false,
	message: "Data already exist.",
};

const NotFound = {
	success: false,
	error: true,
	message: "Not Found : Data not found",
};

module.exports = { ServerError, DatabaseErrorResponse, SuccessResponse,ExistResponse };
