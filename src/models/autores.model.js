const db = require('../config/db');

// Recuperar autores
const selectAll = async () => {
    const [result] = await db.query('SELECT * FROM autores');

    return result;
};

// Recuperar un autor
const selectById = async (autorId) => {
    const [result] = await db.query('SELECT * FROM autores WHERE id = ?', [autorId]);

    if(result.length === 0) return null;

    return result[0];
};

// Insertar un autor
const insert = async ({nombre, email, imagen}) => {
    const [result] = await db.query('INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)', [nombre, email, imagen]);

    return result;
};

// Actualizar un autor
const updateById = async (autorId, {nombre, email, imagen}) => {
    const [result] = await db.query('UPDATE autores SET nombre = ?, email = ?, imagen = ? WHERE id = ?', [nombre, email, imagen, autorId]);

    return result;
};

// Eliminar un autor
const deleteById = async (autorId) => {
    const [result] = await db.query('DELETE FROM autores WHERE id = ?', [autorId]);

    return result;
};


module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById
};