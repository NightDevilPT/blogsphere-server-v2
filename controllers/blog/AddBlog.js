const Status = require("../../constants/Status");
const Response = require("../../constants/Response");
const blogModel = require("../../models/blogModel");
const userModel = require("../../models/userModel");

const AddBlog = async (req, res) => {
	const { tokenData, imageUrl, title, data, tags } = req.body;
	const { _id, email } = tokenData;

	try {
		const findUser = await userModel.findById(_id, { blogs: 1 });
		const addBlog = await blogModel.create({
			imageUrl,
			title,
			data,
			tags: tags.map((items) => items.toLowerCase()),
			userId: _id,
		});

		const updateUser = await userModel.findByIdAndUpdate(_id, {
			blogs: [...findUser.blogs, addBlog._id],
		});

		return res
			.status(Status.CREATED)
			.json(Response.SuccessResponse("Blog successfully uploaded."));
	} catch (err) {
		console.log(err);
		return res.status(Status.SERVER_ERROR).json(Response.ServerError);
	}
};

module.exports = AddBlog;
