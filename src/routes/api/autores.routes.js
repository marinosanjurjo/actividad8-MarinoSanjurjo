const router = require('express').Router();

const { getAll, getById, create, edit, remove } = require('../../controllers/autores.controller');
const { getByAutorId } = require('../../controllers/posts.controller');
const { checkAutorId } = require('../../middleware/autores.middleware');
const { validateSchema } = require('../../middleware/validation.middleware');
const { autorSchema } = require('../../schemas/autores.schema');



// Rutas de /api/autores
router.get('/', getAll);
router.get('/:autorId/posts', checkAutorId, getByAutorId);
router.get('/:autorId', checkAutorId, getById);
router.post('/', validateSchema(autorSchema), create);
router.put('/:autorId', checkAutorId, validateSchema(autorSchema), edit);
router.delete('/:autorId', checkAutorId, remove);

module.exports = router;