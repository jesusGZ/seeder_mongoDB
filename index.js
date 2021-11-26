const modelStore = require('./model')
const DB = require('./connect');

const faker= require('faker')

DB.getConnection().catch((err) => {
	console.error('[Error db]: ' + err);
});
 
let addressRef = faker.address.streetAddress() + ','+ faker.address.streetName() + ',' + faker.address.state() + ','+ faker.address.country()
 
// Creamos 100 Stores
for (var i = 0; i < 200; i++) {
    let star=Math.floor(Math.random() * 6);
    let objecto = {};
    objecto.image=faker.image.food()
    objecto.name =faker.company.companyName();
    objecto.phone = faker.phone.phoneNumber();
    objecto.email = faker.internet.email();
    objecto.slogan = faker.lorem.text(9);
    objecto.description = faker.lorem.text(40);
    objecto.facebook = `https://facebook.com/${faker.internet.userName()}`
    objecto.twitter = `https://twitter.com/${faker.internet.userName()}`
    objecto.instagram = `https://instagram.com/${faker.internet.userName()}`
    objecto.document="19.188.232"
    objecto.address= [faker.address.longitude(),faker.address.latitude()] 
    objecto.addressRef= addressRef
    objecto.stars= star
    modelStore.create(objecto);
}

 
setTimeout((function() {  
    return process.exit(1);
}), 90000); 