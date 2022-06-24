import * as yup from 'yup';

const pizzaVerify = yup.object().shape({
    'name': yup
        .string()
        .trim()
        .required('You must enter a name for the order!')
        .min(2, 'Name must be a minimum of 3 characters'),
    'size': yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Must select a size!'),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    onion: yup.boolean(),
    chicken: yup.boolean(),
    'speacial': yup
        .string()
        .trim()
})

export default pizzaVerify