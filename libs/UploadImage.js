const firebase = require("firebase/app");
const {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} = require("firebase/storage");
const { auth } = require("../firebaseconfig");
const path = require("path");

const UploadImageToFirebase = async (file,path) => {
	const storage = getStorage();
	const fileName = `${path}`;
	const storageRef = ref(storage, fileName);
	const metaData = {
		contentType: file.type,
	};
	try {
		const snap = await uploadBytesResumable(
			storageRef,
			file.buffer,
			metaData
		);
		const link = await getDownloadURL(snap.ref);
		return link;
	} catch (err) {
		return null;
	}
};

module.exports = { UploadImageToFirebase };
