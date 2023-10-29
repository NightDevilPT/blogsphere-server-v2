const Status = require("../../constants/Status");
const Response = require("../../constants/Response");
const userModel = require("../../models/userModel");

const FetchUsers = async (req, res) => {
	const { page, limit, query } = req.query;

	try {
		const count = await userModel.count({ ...JSON.parse(query) });
		let totalPages = parseInt(count / limit);
		if (count % limit > 0) {
			totalPages += 1;
		}

		const fetch = await userModel.find(
			{ ...JSON.parse(query) },
			{ password: 0, token: 0, isverified: 0 },
			{
				limit: limit,
				skip: parseInt(page - 1) * limit,
			}
		);
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

module.exports = FetchUsers;
