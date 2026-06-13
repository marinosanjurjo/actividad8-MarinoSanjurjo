const router = require('express').Router();

const { getAll, getById, create, edit, remove } = require('../../controllers/posts.controller');
const { checkPostId } = require('../../middleware/posts.middleware');
const { validateSchema } = require('../../middleware/validation.middleware');
const { postSchema } = require('../../schemas/posts.schema');

// Rutas de /api/posts
router.get('/', getAll);
router.get('/:postId', checkPostId, getById);
router.post('/', validateSchema(postSchema), create);
router.put('/:postId', checkPostId, validateSchema(postSchema), edit);
router.delete('/:postId', checkPostId, remove);

module.exports = router;