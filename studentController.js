const student = require('addstudent');
const sqlite3 = require('sqlite3').verbose();

//Home page
exports.homepage = async (req, res) => {
    res.render('index', { title: 'Home' });
}

//New Student form
exports.addStudent = async (req, res) => {
    res.render('add', {title: 'Add Student'});
}

//Creation of New Student form
// exports.postStudent = async (req, res) => {
//     console.log(req.body);
//     const newStudent = new student({
//         first_name: req.body.first_name,
//         surname: req.body.surname,
//         dob: req.body.dob,
//         address: req.body.address,
//     });

//     try {
//         await student.create(newStudent);
//         res.redirect('/');
//     }

//     catch (error) {
//         console.log(error);
//     }
// };

exports.postStudent = (req, res) => {
    const { first_name, surname, dob, address } = req.body;

    const sql = `
        INSERT INTO students (first_name, surname, dob, address, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, datetime('now'), datetime('now'))
    `;

    db.run(sql, [first_name, surname, dob, address], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Database error');
        } else {
            res.redirect('/');
        }
    });
};
