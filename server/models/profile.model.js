const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,  //this is the validation for a profile
        required: [ true, "The first name is required."],  //true - this is a required field, the 2nd part is the requirement
        minlength: [1, "The first name is required to be least 1 characters long."],
        maxlength: [51, "Sorry, the first name must be abreviated to be less than 50 characters."],
    },
    lastName: {
        type: String,  //this is the validation for a profile
        required: [ true, "The last name is required."],  //true - this is a required field, the 2nd part is the requirement
        minlength: [1, "The last name is required to be least 1 characters long."],
        maxlength: [51, "Sorry, the last name must be abreviated to be less than 50 characters."],
    },
    licenseMain: {
        type: String,
    },
    licenseMainState: {
        type: String,
        required: [ true, "The License State is required."],  //true - this is a required field, the 2nd part is the requirement
        enum: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 
        'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 
        'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 
        'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ],
    },

    cell: {
        type: Number,
    },

    emailMain: {
        type: String,
    },

    website: {
        type: String,
    },

    pictureUrl: { type: String },

    companyCurrent: {
        type: String,  //this is the validation for a product
        required: [ true, ""],  //true - this is a required field, the 2nd part is the requirement
        enum: [
            '@properties', 'Berkshire Hathaway HomeServices', 'Baird & Warner', 
            'Century 21', 'Coldwell Banker Real Estate', 'Compass', 
            'EXIT Realty', 'eXp Realty', 'Halstead Real Estate', 
            'HomeServices of America', 'Keller Williams Realty', 'Rainmaker Real Estate', 
            'Redfin', 'RE/MAX', 'Sotheby’s International Realty', 'Weichert', 'Other'
            ], 
    },

    companyCurrentLogo: { type: String },

    about: {
        type: String,  //this is the validation for a profile
        maxlength: [, "Sorry, the about section must be abreviated to be less than 1000 characters."],
    },


}, { timestamps: true }); // need it! this is the options of the Schema, required

// the string to export that you use here is the name of the collection inside of the db
// the collection name will be lowercase, regardless of how you type it
// 2nd piece to export is the schema
module.exports = mongoose.model("Profile", ProfileSchema);