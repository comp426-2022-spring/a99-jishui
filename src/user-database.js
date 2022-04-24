"use strict";

const Database = require('better-sqlite3')

const db = new Database('user.db')

const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';
`)

let row = stmt.get()

if (row === undefined) {
    console.log('User database appears to be empty. Creating log database...')

    const sqlInit = `
        CREATE TABLE userinfo ( id INTEGER PRIMARY KEY, username TEXT, email TEXT, password TEXT );
    `

    db.exec(sqlInit)
} else {
    console.log('Database exists.')
}

module.exports = db