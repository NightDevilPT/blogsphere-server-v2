const userRoute = require("express").Router();

const AddUser = require("../controllers/AddUser");



userRoute.post('/create',AddUser);


module.exports = userRoute;
