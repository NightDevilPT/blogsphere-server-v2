const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	avtar: {
		type: String,
		default: "",
	},
	username: {
		type: String,
		required: [true, "username required"],
	},
	firstname: {
		type: String,
		default: "",
	},
	lastname: {
		type: String,
		default: "",
	},
	email: {
		type: String,
		required: [true, "email required"],
	},
	gender: {
		type: String,
		default: "",
	},
	password: {
		type: String,
		required: [true, "password required"],
	},
	token: {
		type: String || null,
		default: null,
	},
	isverified: {
		type: Boolean,
		default: false,
	},
	facebook: {
		type: String,
		default: "",
	},
	instagram: {
		type: String,
		default: "",
	},
	youtube: {
		type: String,
		default: "",
	},
	linkedin: {
		type: String,
		default: "",
	},
	twitter: {
		type: String,
		default: "",
	},
	github: {
		type: String,
		default: "",
	},
	portfolio: {
		type: String,
		default: "",
	},
	followers: {
		type: Array,
		default: [],
	},
	following: {
		type: Array,
		default: [],
	},
	blogs: {
		type: Array,
		default: [],
	},
	liked: {
		type: Array,
		default: [],
	},
	saved: {
		type: Array,
		default: [],
	},
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

module.exports = userModel;
