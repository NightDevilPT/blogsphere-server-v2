const userRoute = require("express").Router();
const UploadMiddleware = require("../middleware/multer.js");

const AddUser = require("../controllers/user/AddUser");
const LoginUser = require("../controllers/user/LoginUser");
const GetProfile = require("../controllers/user/GetProfile");
const VerifyUserToken = require("../controllers/user/VerifyUser");
const VerifyHeaderToken = require("../middleware/HeaderMiddleware");
const UpdateProfile = require("../controllers/user/UpdateProfile.js");
const ForgetPassword = require("../controllers/user/ForgetPassword.js");

userRoute.post("/login", LoginUser);
userRoute.post("/create", AddUser);
userRoute.put("/verify", VerifyUserToken);
userRoute.get("/get-profile", VerifyHeaderToken, GetProfile);
userRoute.put("/update-profile", VerifyHeaderToken, UpdateProfile);
userRoute.put("/forget-password", ForgetPassword);
// userRoute.put('update-password',VerifyHeaderToken)

module.exports = userRoute;
