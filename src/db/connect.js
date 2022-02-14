const mongoose = require('mongoose');
const chalk = require('chalk');

const { MONGO_DB } = require('../config');

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

const getConnection = function () {
	return new Promise(async function (resolve, reject) {
		try {
			mongoose.Promise = global.Promise;

			await mongoose.connect(`mongodb://${MONGO_DB.HOST}:${MONGO_DB.PORT}/${MONGO_DB.DB_NAME}?authSource=admin`, {
				user: `${MONGO_DB.USER}`,
				pass: `${MONGO_DB.PASS}`,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});

			const db = mongoose.connection;
			resolve(db);
		} catch (error) {
			reject(error);
		}
	});
};

mongoose.connection.on('connected', () => {
	console.log(connected('La conexión predeterminada de Mongoose está abierta'));
});

mongoose.connection.on('error', (err) => {
	console.log(error('La conexión predeterminada de Mongoose ha pasado ' + err + ' error'));
});

mongoose.connection.on('disconnected', () => {
	console.log(disconnected('La conexión predeterminada de Mongoose está desconectada.'));
});

process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log(termination('La conexión predeterminada de Mongoose está desconectada debido a la finalización de la aplicación.'));
		process.exit(0);
	});
});

module.exports = { getConnection };
