const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ConnectDatabase } = require("./middleware/ConnectDB.js");
const { SUCCESS } = require("./constants/Status.js");
const { SuccessResponse } = require("./constants/Response.js");
const userRoute = require("./routes/userRoute.js");

const PORT = process.env.PORT || 3500;

const server = express();
server.use(bodyParser.urlencoded({ extended: true, limit: "2mb" }));
server.use(ConnectDatabase);
server.get("/", (req, res) => {
	return res.status(SUCCESS).json(SuccessResponse("Welcome to BlogSphere"));
});

server.use("/user", userRoute);

server.listen(PORT, () => {
	console.log(`server running in ${PORT}`);
});
