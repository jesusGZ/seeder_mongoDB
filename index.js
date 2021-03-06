const faker = require('faker');

const modelStore = require('./src/model');
const DB = require('./src/db/connect');

DB.getConnection().catch((err) => {
	console.error('[Error db]: ' + err);
});

function process() {
	return new Promise(async (resolve) => {
		try {
			let addressRef = faker.address.streetAddress() + ',' + faker.address.streetName() + ',' + faker.address.state() + ',' + faker.address.country();

			let star = Math.floor(Math.random() * 6);
			let objecto = {};
			objecto.image = faker.image.food();
			objecto.name = faker.company.companyName();
			objecto.phone = faker.phone.phoneNumber();
			objecto.email = faker.internet.email();
			objecto.slogan = faker.lorem.text(9);
			objecto.description = faker.lorem.text(40);
			objecto.facebook = `https://facebook.com/${faker.internet.userName()}`;
			objecto.twitter = `https://twitter.com/${faker.internet.userName()}`;
			objecto.instagram = `https://instagram.com/${faker.internet.userName()}`;
			objecto.document = '19.188.232';
			objecto.address = [faker.address.longitude(), faker.address.latitude()];
			objecto.addressRef = addressRef;
			objecto.stars = star;
			await modelStore.create(objecto);

			resolve(`Ejecucion correcta`);
		} catch (error) {
			resolve(error);
		}
	});
}

async function seed() {
	try {
		for (const i = 0; i < 5000; i++) {
			const result = await process();
			console.log(result);
		}

		console.log('Proceso finalizado');
	} catch (error) {
		console.log(error);
	}
}

module.exports = seed();
