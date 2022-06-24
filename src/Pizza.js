import * as yup from 'yup';

const pizzaVerify = yup.object().shape({
    'name-input': yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2, "name must be at least 2 characters"),
    'size-dropdown': yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Must select a size!'),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    onion: yup.boolean(),
    chicken: yup.boolean(),
    'special-text': yup
        .string()
        .trim()
})

export default pizzaVerify