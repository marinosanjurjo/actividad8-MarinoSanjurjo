const validateSchema = (schema) => {
    return async (req, res, next) => {
        try {
            const data = await schema.validate(req.body, {abortEarly: false});
            next();
        } catch ({errors}) {
            return res.status(400).json(errors);
        }
    }
}

module.exports = {
    validateSchema
}