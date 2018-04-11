exports.get = function (req, res, next) {
    const db = require('../database/create_table');

    db.query("SELECT * FROM contatos", [], (err, result) => {
        if (err) {
            res.json({
                status: 400,
                msg: "" + err,
                result: err
            });
            return false;
        }
        res.json({
            status: 200,
            msg: "Busca realizada com sucesso.",
            result: result
        });
    });
};

exports.post = (req, res, next) => {
    const db = require('../database/create_table');

    let param = [req.body.nome, req.body.CPF];

    db.query("INSERT INTO contatos(nome, CPF) VALUES (?, ?)", param, (err, result) => {
        if (err) {
            res.json({
                status: 400,
                msg: "" + err,
                result: err
            });
            return false;
        }
        res.json({
            status: 201,
            msg: "Contato inserido com sucesso.",
            result: result
        });
    });
};

exports.put = (req, res, next) => {
    const db = require('../database/create_table');

    let param = [req.body.nome, req.body.CPF, req.params.id];

    db.query(`UPDATE contatos SET 
                     nome = ?, 
                     CPF = ?
                     WHERE id = ?`, param, (err, result) => {
        if (err) {
            res.json({
                status: 400,
                msg: "" + err,
                result: err
            });
            return false;
        }
        res.json({
            status: 201,
            msg: "Contato alterado com sucesso.",
            result: result
        });
    });
};

exports.delete = (req, res, next) => {
    const db = require('../database/create_table');

    let param = [req.params.id];

    db.query("DELETE FROM contatos WHERE id = ?", param, (err, result) => {
        if (err) {
            res.json({
                status: 400,
                msg: "" + err,
                result: err
            });
            return false;
        }
        res.json({
            status: 201,
            msg: "Contato excluido com sucesso.",
            result: result
        });
    });
};