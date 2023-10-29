const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: [true, "username required"],
	},
	imageUrl: {
		type: String,
		default: "",
	},
	title: {
		type: String,
		required: [true, "Title required"],
	},
	data: {
		type: String,
		required: [true, "Data required"],
	},
	tags:{
		type:Array,
		default:[]
	},
	liked: {
		type: Array,
		default: [],
	},
});

const blogModel = mongoose.models.blogs || mongoose.model("blogs", blogSchema);

module.exports = blogModel;
