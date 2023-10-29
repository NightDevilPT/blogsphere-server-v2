const Status = require("../../constants/Status");
const Response = require("../../constants/Response");
const blogModel = require("../../models/blogModel");

const FetchBlogs = async (req, res) => {
	const { page, limit } = req.query;

	try {
		const count = await blogModel.count({});
		let totalPages = parseInt(count / limit);
		if (count % limit > 0) {
			totalPages += 1;
		}

		const fetch = await blogModel.find({}, null, {
			limit: limit,
			skip: parseInt(page - 1) * limit,
		});
		return res.status(Status.SUCCESS).json({
			data: fetch,
			totalResults: count,
			totalPages,
			page: parseInt(page) > totalPages ? totalPages : parseInt(page),
			limit: parseInt(limit),
			...Response.SuccessResponse(
				fetch.length > 0 ? "Blogs successfully fetched." : "No Data"
			),
		});
	} catch (err) {
		return res.status(Status.SERVER_ERROR).json(Response.ServerError);
	}
};

module.exports = FetchBlogs;

// count = 7
// page = 2
// limit = 3
// 7 / 3
