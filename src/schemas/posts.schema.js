const yup = require('yup');

const postSchema = yup.object({
    titulo: yup.string().trim().required('El título es obligatorio'),
    descripcion: yup.string().trim().required('La descripción es obligatoria'),
    categoria: yup.string().trim().required('La categoría es obligatoria'),
    autor_id: yup.number().typeError('El autor_id debe ser un número').required('El autor_id es obligatorio')
});

module.exports = {
    postSchema
};