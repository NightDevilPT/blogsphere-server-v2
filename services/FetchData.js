const FetchData = async (model, findData, filter = null) => {
	if (filter) {
		const find = await model.find(findData, filter);
		return find;
	}
	const find = await model.find(findData);
	return find;
};

module.exports = FetchData;
