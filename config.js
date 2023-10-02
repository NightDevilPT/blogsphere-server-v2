require("dotenv").config();

exports.MONGODB_URL = process.env.MONGODB_URL;
exports.PRIVATE_KEY = process.env.PRIVATE_KEY;
exports.EXPIRE_IN = process.env.EXPIRE_IN;
exports.EMAIL_ID = process.env.EMAIL_ID;
exports.EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
exports.ORIGIN = process.env.ORIGIN;

exports.API_KEY = process.env.API_KEY;
exports.AUTH_DOMAIN = process.env.AUTH_DOMAIN;
exports.PROJECT_ID = process.env.PROJECT_ID;
exports.STORAGE_BUCKET = process.env.STORAGE_BUCKET;
exports.MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID;
exports.APP_ID = process.env.APP_ID;
exports.MEASUREMENT_ID = process.env.MEASUREMENT_ID;