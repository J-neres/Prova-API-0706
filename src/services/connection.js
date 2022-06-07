import { createConnection } from 'mysql2'
import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PWD,
    DATABASE: process.env.MYSQL_DB
})
console.log('bd conectado');

export {con}