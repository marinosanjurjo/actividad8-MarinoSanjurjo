const AutoresModel = require('../models/autores.model');

// Recuperar autores
const getAll = async (req, res) => {
    try {
        const autores = await AutoresModel.selectAll();
        res.json(autores);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

// Recuperar un autor
const getById = (req, res) => {
    res.json(req.autor);
};

// Crear un autor
const create = async (req, res) => {
    const result = await AutoresModel.insert(req.body);
    const nuevoAutor = await AutoresModel.selectById(result.insertId);
    res.status(201).json({
        message: "Autor creado correctamente",
        autor: nuevoAutor
    });
};

// Editar un autor
const edit = async (req, res) => {
    const {body, params: {autorId}} = req;
    const result = await AutoresModel.updateById(autorId, body);
    const autor = await AutoresModel.selectById(autorId);
    res.json({
        message: "Autor actualizado correctamente",
        autor: autor
    });
};

// Eliminar un autor
const remove = async (req, res) => {
    const {autorId} = req.params;
    const result = await AutoresModel.deleteById(autorId);
    res.json({
        message: "Autor eliminado correctamente",
        autor: req.autor
    });
};

module.exports = {
    getAll,
    getById,
    create,
    edit,
    remove
}
