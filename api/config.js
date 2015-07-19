module.exports ={
	url : process.env.REDISTOGO_URL || require("./creds.json").url
};