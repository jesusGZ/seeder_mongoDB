'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let StoreSchema = Schema(
	{
		name: { type: String, required: true, unique: true },
		email: { type: String, unique: true, lowercase: true, required: true },
		addressRef: { type: String, default: null },
		address: { type: Array, required: true },
		phone: { type: String, required: true },
		description: { type: String, default: null },
		slogan: { type: String, default: null },
		facebook: { type: String, default: null },
		twitter: { type: String, default: null },
		instagram: { type: String, default: null },
		image: { type: String, default: null },
		stars: { type: Number, default: 0 },
	},
	{ timestamps: true, versionKey: false },
	{ versionKey: false }
);

StoreSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

module.exports = mongoose.model('Store', StoreSchema);
