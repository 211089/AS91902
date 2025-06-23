// const sqlite3 = require('sqlite3').verbose();

// const Schema = sqlite3.Schema;
// const StudentSchema = new Schema({
//     first_name:{
//         type: String,
//         required: true
//     },
//     surname:{
//         type: String,
//         required: true
//     },
//     dob:{
//         type: String,
//         required: true
//     },
//     address:{
//         type: String,
//         required: true
//     },
//     createdAt:{
//         type: Date,

//     },
//     updatedAt:{
//         type: Date,
//     }

// });

// module.export = sqlite3.model('Student', StudentSchema);

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to the same database
const db = new sqlite3.Database(path.resolve(__dirname, './test.db'), (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to SQLite database in addstudent.js');
    }
});

// Function to add a student
function addStudent({ first_name, surname, dob, address }, callback) {
    const sql = `
        INSERT INTO students (first_name, surname, dob, address)
        VALUES (?, ?, ?, ?)
    `;

    db.run(sql, [first_name, surname, dob, address], function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, this.lastID); // this = statement context
        }
    });
}

module.exports = { addStudent };