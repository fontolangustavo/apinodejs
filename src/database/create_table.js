var mysql = require('mysql');

/*
    Função para criar a tabela no banco
*/

var connection = mysql.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

//connection.connect();

module.exports = connection;
/*

function createTable(conn) {
    const sql = "CREATE TABLE IF NOT EXISTS contatos (\n" +
        "id int NOT NULL AUTO_INCREMENT,\n" +
        "nome varchar(150) NOT NULL,\n" +
        "CPF char(11) NOT NULL,\n" +
        "PRIMARY KEY (id)\n" +
        ");";

    conn.query(sql, function (error, results, fields) {
        if (error) {
            return console.log(error);
        }
        console.log('Tabela contatos criada com sucesso!');
    });
}

 function execSQLQuery(sqlQry, param, callback) {
    console.log(process.env.database);
    console.log(process.env.host);
    const connection = mysql.createConnection({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });

    connection.query(sqlQry, param, (err, result) =>{
        connection.end();
        if (err != null) {
            return callback(err);
        }

        return callback(result);
    });
}
*/
//module.exports = execSQLQuery;

