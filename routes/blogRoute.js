const AddBlog = require("../controllers/blog/AddBlog");
const FetchBlogs = require("../controllers/blog/FetchBlogs");
const UpdateBlog = require("../controllers/blog/UpdateBlog");
const UploadBlogImage = require("../controllers/blog/UploadBlogImage");
const VerifyHeaderToken = require("../middleware/HeaderMiddleware");
const UploadMiddleware = require("../middleware/multer");

const blogRoute = require("express").Router();

blogRoute.post("/create", VerifyHeaderToken, AddBlog);
blogRoute.put("/update", VerifyHeaderToken, UpdateBlog);
blogRoute.get("/", FetchBlogs);
blogRoute.post(
	"/upload",
	VerifyHeaderToken,
	UploadMiddleware.single("image"),
	UploadBlogImage
);

module.exports = blogRoute;
