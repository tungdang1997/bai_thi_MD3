const connection = require('../model/connection');
connection.connecting();

class StudentService {
    static connect = connection.getConnection();
    static findAll() {
        return new Promise((resolve, reject) => {
           StudentService.connect.query('SELECT * FROM students ', (err, students) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(students);
                }
            }) 
        })
    }

    static create(student) {
        return new Promise((resolve, reject) => {
            StudentService.connect.query(`INSERT INTO students(name, class, scoreTheory, evaluate, scorePractice, description) VALUES ('${student.name}', '${student.class}', ${student.scoreTheory}, '${student.evaluate}', ${student.scorePractice}, '${student.description}')`, (err, data) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve(data);
                 }
             }) 
         })
    }

    static remove(id) {
        return new Promise((resolve, reject) => {
            StudentService.connect.query(`DELETE FROM students WHERE id = ${id}`, (err) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve('Xoá thành công');
                 }
             }) 
         })
    }

    static findById(id) {
        return new Promise((resolve, reject) => {
            StudentService.connect.query(`SELECT * FROM students WHERE students.id = ${id}`, (err, students) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve(students);
                 }
             }) 
        })
    }

    static update(student, id) {
        return new Promise((resolve, reject) => {
            StudentService.connect.query(`UPDATE students SET name = '${student.name}', class = '${student.class}', scoreTheory = ${student.scoreTheory}, evaluate = '${student.evaluate}', scorePractice = ${student.scorePractice}, description = '${student.description}' WHERE id = ${id}`, (err, students) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve(students);
                 }
             }) 
        })
    }

    static findByNameContaining(name) {
        return new Promise((resolve, reject) => {
            StudentService.connect.query(`SELECT * FROM students WHERE name LIKE '%${name}%'`, (err, students) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve(students);
                 }
             }) 
        })
    }

    static sortScoreByPraticeUP() {
        return new Promise((resolve, reject) => {
            StudentService.connect.query('SELECT * FROM students ORDER BY scorePractice', (err, students) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(students);
                }
            }) 
        })
    }

    static sortScoreByPraticeDown() {
        return new Promise((resolve, reject) => {
            StudentService.connect.query('SELECT * FROM students ORDER BY scorePractice DESC', (err, students) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(students);
                }
            }) 
        })
    }

    static sortScoreByTheoryUP() {
        return new Promise((resolve, reject) => {
            StudentService.connect.query('SELECT * FROM students ORDER BY scoreTheory', (err, students) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(students);
                }
            }) 
        })
    }

    static sortScoreByTheoryDown() {
        return new Promise((resolve, reject) => {
            StudentService.connect.query('SELECT * FROM students ORDER BY scoreTheory DESC', (err, students) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(students);
                }
            }) 
        })
    }
}

module.exports = StudentService;