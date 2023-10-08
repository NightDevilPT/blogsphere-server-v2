const userRoute = require("express").Router();

const AddUser = require("../controllers/user/AddUser");
const VerifyUserToken = require("../controllers/user/VerifyUser");

userRoute.post("/create", AddUser);
userRoute.put("/verify", VerifyUserToken);

module.exports = userRoute;
