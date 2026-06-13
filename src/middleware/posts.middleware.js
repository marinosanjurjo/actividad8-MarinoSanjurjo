const PostsModel = require("../models/posts.model");

const checkPostId = async (req, res, next) => {
    const { postId } = req.params;

    // postId no númerico
    if (isNaN(postId)) {
        return res.status(400).json({
            message: "El id del post debe ser un número"
        });
    }

    // postId no existe
    const post = await PostsModel.selectById(postId);

    if (!post) {
        return res.status(404).json({
            message: "El post no existe con ese ID"
        });
    }

    req.post = post;

    next();
};

module.exports = { checkPostId };