const router = require('express').Router();

// Rutas de /api
router.use('/autores', require('./api/autores.routes'));
router.use('/posts', require('./api/posts.routes'));

module.exports = router;