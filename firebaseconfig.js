const config = require("./config");
const firebase = require("firebase/app");
const { getAuth } = require("firebase/auth");
const firebaseConfig = {
	apiKey: config.API_KEY,
	authDomain: config.AUTH_DOMAIN,
	projectId: config.PROJECT_ID,
	storageBucket: config.STORAGE_BUCKET,
	messagingSenderId: config.MESSAGING_SENDER_ID,
	appId: config.APP_ID,
	measurementId: config.MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { auth };
