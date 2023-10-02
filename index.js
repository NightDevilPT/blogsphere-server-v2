import express from "express";


const PORT = process.env.PORT || 3500;

const server = express();

server.get("/", (request, response) => {
	return response.json({
		success: true,
		error: false,
		message: "Welcome BlogSphere Server",
	});
});

server.listen(PORT, () => {
	console.log("server running ",PORT);
});
