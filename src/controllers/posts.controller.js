const PostsModel = require('../models/posts.model');

// Recuperar posts
const getAll = async (req, res) => {
    try {
        const posts = await PostsModel.selectAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

// Recuperar un post
const getById = async (req, res) => {
    res.json(req.post);
};

// Crear un post
const create = async (req, res) => {
    const result = await PostsModel.insert(req.body);
    const nuevoPost = await PostsModel.selectById(result.insertId);
    res.status(201).json({
        message: 'Post creado correctamente',
        post: nuevoPost
    });
};

// Editar un post
const edit = async (req, res) => {
    const { body, params: { postId } } = req;
    const result = await PostsModel.updateById(postId, body);
    const post = await PostsModel.selectById(postId);
    res.json({
        message: 'Post actualizado correctamente',
        post
    });
};

// Eliminar un post
const remove = async (req, res) => {
    const { postId } = req.params;
    const result = await PostsModel.deleteById(postId);
    res.json({
        message: 'Post eliminado correctamente',
        post: req.post
    });
};

module.exports = {
    getAll,
    getById,
    create,
    edit,
    remove
};