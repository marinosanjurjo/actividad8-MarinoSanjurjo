const AutoresModel = require('../models/autores.model');

const checkAutorId = async (req, res, next) => {
    const { autorId } = req.params;

    // autorId no númerico
    if (isNaN(autorId)) {
        return res.status(400).json({
            message: "El id del autor debe ser un número"
        });
    }

    // autorId no existe
    const autor = await AutoresModel.selectById(autorId);

    if (!autor) {
        return res.status(404).json({
            message: "El autor no existe con ese ID"
        });
    }

    req.autor = autor;

    next();
};

module.exports = { checkAutorId };