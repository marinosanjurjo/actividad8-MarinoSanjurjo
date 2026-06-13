const yup = require('yup');

const autorSchema = yup.object({
    nombre: yup.string().required("El nombre es obligatorio"),
    email: yup.string().trim().email("El email no tiene formato correcto").required("El email es obligatorio"),
    imagen: yup.string().url("La imagen debe ser una URL válida").required("La imagen es obligatoria"),    
});

module.exports = {
    autorSchema
};