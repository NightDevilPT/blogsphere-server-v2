const userRoute = require("express").Router();
const UploadMiddleware = require("../middleware/multer.js");

const AddUser = require("../controllers/user/AddUser");
const LoginUser = require("../controllers/user/LoginUser");
const GetProfile = require("../controllers/user/GetProfile");
const UploadProfile = require("../controllers/user/uploadProfile");
const VerifyUserToken = require("../controllers/user/VerifyUser");
const UpdateUserProfile = require("../controllers/user/UpdateUserProfile");
const { VerifyHeaderToken } = require("../middleware/HeaderMiddleware");

userRoute.post("/login", LoginUser);
userRoute.post("/create", AddUser);
userRoute.put("/verify", VerifyUserToken);
userRoute.get("/get-profile", VerifyHeaderToken, GetProfile);
userRoute.put(
	"/upload-profile",
	UploadMiddleware.single("avtar"),
	VerifyHeaderToken,
	UploadProfile
);

module.exports = userRoute;
