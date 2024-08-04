import {z} from 'zod'

const userLoginSchema = z.object({
    email: z
        .string({ message: 'Usuario y/o contraseña incorrectos.' })
        .min(1, { message: 'Usuario y/o contraseña incorrectos.' })
        .max(100, { message: 'Usuario y/o contraseña incorrectos.' })
        .regex(/^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/, 'Usuario y/o contraseña incorrectos.'),

    password: z
        .string({ message: 'Usuario y/o contraseña incorrectos.' })
        .min(6, { message: 'Usuario y/o contraseña incorrectos.' })
        .max(100, { message: 'Usuario y/o contraseña incorrectos.' })
        .regex(/^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d@_]+$/, 'Usuario y/o contraseña incorrectos.'),
})

export default userLoginSchema;