'use strict'

const mysql = require('mysql');

const conexao  = mysql.createConnection({
    host: 'database-1.ckttgzjulq7d.us-east-1.rds.amazonaws.com', //'localhost'
    port: '3306',
    user: 'admin', //root
    password: 'info_bsi', //''
    database: 'covid'
});

IP: 

module.exports = conexao;