import { z } from 'zod';

const userRegisterSchema = z.object({
    fullName: z
        .string({ message: 'El nombre completo debe ser una cadena de caracteres.' })
        .min(3, { message: 'El nombre completo debe tener al menos 3 caracteres.' })
        .max(100, { message: 'El nombre completo no puede tener más de 100 caracteres.' })
        .regex(/^[a-zA-Z\s]+$/, 'El nombre completo debe contener únicamente letras y espacios.'),

    gender: z.string().refine(
        (value) => value === 'M' || value === 'F', 
        { message: 'El sexo debe ser F o M.'}),
        
    age: z
        .number({ message: 'El año debe ser un número.' })
        .min(10, { message: 'El año debe ser mayor o igual a 10.' })
        .max(50, { message: 'El año no puede ser mayor a 50.' }),

    grade: z
        .number({ message: 'El grado debe ser un número.' })
        .min(1, { message: 'El grado debe ser mayor o igual a 1.' })
        .max(5, { message: 'El grado no puede ser mayor a 5.' }),

    email: z
        .string({ message: 'El email debe ser una cadena de caracteres.' })
        .min(3, { message: 'El email debe tener al menos 3 caracteres.' })
        .max(100, { message: 'El email no puede tener más de 100 caracteres.' })
        .regex(/^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/, 'El email debe ser válido.'),

    password: z
        .string({ message: 'La contraseña debe ser una cadena de caracteres.' })
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
        .max(100, { message: 'La contraseña no puede tener más de 100 caracteres.' })
        .regex(/^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d@_]+$/, 'La contraseña debe contener una letra mayúscula, al menos dos números y opcionalmente caracteres especiales.'),

    rePassword: z
        .string({ message: 'La confirmación de la contraseña debe ser una cadena de caracteres.' })
        .min(6, { message: 'La confirmación de la contraseña debe tener al menos 6 caracteres.' })
        .max(100, { message: 'La confirmación de la contraseña no puede tener más de 100 caracteres.' }),
}).refine(data => data.password === data.rePassword, {
    message: 'Las contraseñas no coinciden.',
    path: ['rePassword'],
});

export default userRegisterSchema;