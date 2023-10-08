const userRoute = require("express").Router();

const AddUser = require("../controllers/user/AddUser");
const LoginUser = require("../controllers/user/LoginUser");
const UpdateUserProfile = require("../controllers/user/UpdateUserProfile");
const VerifyUserToken = require("../controllers/user/VerifyUser");
const UploadAvtar = require("../middleware/multer.js");

userRoute.post("/login", LoginUser);
userRoute.post("/create", AddUser);
userRoute.put("/verify", VerifyUserToken);
// userRoute.put("/update-profile", UpdateUserProfile);
// userRoute.put('/update-avtar',UploadAvtar.single('avtar'),)

module.exports = userRoute;
