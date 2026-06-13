const db = require("../config/db");

// Recuperar posts
const selectAll = async () => {
    const [result] = await db.query(`
        SELECT 
            p.id AS post_id,
            p.titulo,
            p.descripcion,
            p.fecha_creacion,
            p.categoria,
            p.autor_id,
            a.nombre AS autor_nombre,
            a.email AS autor_email,
            a.imagen AS autor_imagen
        FROM posts p
        INNER JOIN autores a ON p.autor_id = a.id
    `);

    return result;
};

// Recuperar un post
const selectById = async (postId) => {
    const [result] = await db.query(
        `
        SELECT 
            p.id AS post_id,
            p.titulo,
            p.descripcion,
            p.fecha_creacion,
            p.categoria,
            p.autor_id,
            a.nombre AS autor_nombre,
            a.email AS autor_email,
            a.imagen AS autor_imagen
        FROM posts p
        INNER JOIN autores a ON p.autor_id = a.id
        WHERE p.id = ?
        `,
        [postId]
    );

    if (result.length === 0) return null;

    return result[0];
};

// Recuperar posts de un autor
const selectByAutorId = async (autorId) => {
    const [result] = await db.query(
        `
        SELECT 
            p.id AS post_id,
            p.titulo,
            p.descripcion,
            p.fecha_creacion,
            p.categoria,
            p.autor_id,
            a.nombre AS autor_nombre,
            a.email AS autor_email,
            a.imagen AS autor_imagen
        FROM posts p
        INNER JOIN autores a ON p.autor_id = a.id
        WHERE p.autor_id = ?
        `,
        [autorId]
    );

    return result;
};

// Insertar un post
const insert = async ({ titulo, descripcion, categoria, autor_id }) => {
    const [result] = await db.query('INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)', [titulo, descripcion, categoria, autor_id]);

    return result;
};

// Actualizar un autor
const updateById = async (postId, { titulo, descripcion, categoria, autor_id }) => {
    const [result] = await db.query('UPDATE posts SET titulo = ?, descripcion = ?, categoria = ?, autor_id = ? WHERE id = ?', [titulo, descripcion, categoria, autor_id, postId]);

    return result;
};

// Eliminar post
const deleteById = async (postId) => {
    const [result] = await db.query('DELETE FROM posts WHERE id = ?', [postId]);

    return result;
};

module.exports = {
    selectAll,
    selectById,
    selectByAutorId,
    insert,
    updateById,
    deleteById
};