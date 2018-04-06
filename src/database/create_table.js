const mysql = require('mysql');

/*
    Função para criar a tabela no banco
*/

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

function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'node'
    });

    connection.query(sqlQry, function (error, results, fields) {
        if (error) {
            res.json(error);
        } else {
            res.json({
                    status: 200, 
                    msg: "Busca realizada com sucesso", 
                    result: results
                });
        }
        
        connection.end();
        console.log('Comando SQL executado com sucesso!');
    });
}

exports.execSQLQuery = execSQLQuery;