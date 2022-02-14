require('dotenv').config();

module.exports = {
	SERVICE: {
		PORT: process.env.SERVICE_PORT,
	},
	MONGO_DB: {
		HOST: process.env.HOST,
		PORT: process.env.PORT,
		USER: process.env.USER,
		PASS: process.env.PASS,
		DB_NAME: process.env.DB_NAME,
	},
};
