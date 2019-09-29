const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Business
let Student = new Schema({
    name: {

        type: String
    },
    class: {
        type: String
    },  
    year: {
        type: Number
    },
    grades: {
        type: [Number]
    }
}, {
    collection: 'student'
});
module.exports = mongoose.model('Student', Student);