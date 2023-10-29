const Status = require("../../constants/Status");
const Response = require("../../constants/Response");
const blogModel = require("../../models/blogModel");

const UpdateBlog = async (req, res) => {
	const { blogId } = req.query;
	const { tokenData, imageUrl, title, data, tags } = req.body;
	const { _id, email } = tokenData;

	if (!blogId) {
		return res.status(Status.NOT_FOUND).json(Response.NotFound);
	}

	try {
		const updateBlog = await blogModel.findByIdAndUpdate(blogId, {
			imageUrl,
			title,
			data,
			tags: tags.map((items) => items.toLowerCase()),
			userId: _id,
		});
		return res
			.status(Status.SUCCESS)
			.json(Response.SuccessResponse("Blog successfully updated."));
	} catch (err) {
		console.log(err);
		return res.status(Status.SERVER_ERROR).json(Response.ServerError);
	}
};

module.exports = UpdateBlog;
