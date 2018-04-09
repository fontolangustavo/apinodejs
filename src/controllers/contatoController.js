var db = require('../database/create_table');

exports.get = function (req, res, next) {
    db.execSQLQuery("SELECT * FROM contatos", [], (result) => {
        res.json({
            status: 200,
            msg: "Busca realizada com sucesso.",
            result: result
        }
        );
    });
};

exports.post = (req, res, next) => {
    let param = [req.body.nome, req.body.CPF];
    db.execSQLQuery("INSERT INTO contatos(nome, CPF) VALUES (?, ?)", param, (result) => {
        res.json({
            status: 201,
            msg: "Contato inserido com sucesso.",
            result: result
        }
        );
    });
};

exports.put = (req, res, next) => {
    let param = [req.body.nome, req.body.CPF, req.params.id];
    db.execSQLQuery(`UPDATE contatos SET 
                     nome = ?, 
                     CPF = ?
                     WHERE id = ?`, param, (result) => {
            res.json({
                status: 201,
                msg: "Contato alterado com sucesso.",
                result: result
            }
            );
        });
};

exports.delete = (req, res, next) => {
    let param = [req.params.id];
    db.execSQLQuery("DELETE FROM contatos WHERE id = ?", param, (result) => {
            res.json({
                status: 201,
                msg: "Contato excluido com sucesso.",
                result: result
            }
            );
        });
};