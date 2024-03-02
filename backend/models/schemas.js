const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    imageId: { type: String, required: true } 
});


const Listings = mongoose.model('Listings', listingSchema, 'listings');


const mySchemas = { 'Listings': Listings };

module.exports = mySchemas;
