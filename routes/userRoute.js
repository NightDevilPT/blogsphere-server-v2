const userRoute = require("express").Router();
const UploadMiddleware = require("../middleware/multer.js");

const AddUser = require("../controllers/user/AddUser");
const LoginUser = require("../controllers/user/LoginUser");
const GetProfile = require("../controllers/user/GetProfile");
const VerifyUserToken = require("../controllers/user/VerifyUser");
const VerifyHeaderToken = require("../middleware/HeaderMiddleware");
const UpdateProfile = require("../controllers/user/UpdateProfile.js");
const ForgetPassword = require("../controllers/user/ForgetPassword.js");
const UpdatePassword = require("../controllers/user/UpdatePassword.js");
const {
	DeleteAccountRequest,
	DeleteAccount,
} = require("../controllers/user/DeleteAccount.js");

userRoute.get("/get-profile", VerifyHeaderToken, GetProfile); //* Done
userRoute.post("/login", LoginUser); //* Done
userRoute.post("/create", AddUser); //* Done
userRoute.put("/update", VerifyHeaderToken, UpdateProfile); // * Done
userRoute.put("/verify", VerifyUserToken); //* Done
userRoute.put("/forget-password", ForgetPassword); //* Done
userRoute.put("/update-password", UpdatePassword); //* Done
userRoute.delete("/delete-account", DeleteAccount); //* Done
userRoute.delete(
	"/delete-account-request",
	VerifyHeaderToken,
	DeleteAccountRequest
); //*Done

module.exports = userRoute;
