import { Button, Input, Link, Radio, RadioGroup } from '@nextui-org/react'
import React from 'react'

function page() {
  return (
    <section className="flex flex-col items-center justify-center">
        <div className='w-8/12 py-10'>
            <h2 className='text-success text-xl p-3'>Registrate</h2>
                <form action="" method='post' className='flex flex-col items-center justify-center gap-4'>
                <Input required type='text' label='Nombres completos' placeholder='Ingrese su nombre completo' />
                <RadioGroup label='¿Cuál es su sexo?' orientation='horizontal' name='sexo' color='success'>
                    <Radio value='Masculino'>Masculino</Radio>
                    <Radio value='Femenino'>Femenino</Radio>
                    <Radio value='Otro'>Otro</Radio>
                </RadioGroup>
                <Input required type='number' min={10} max={30} step={1} label='Edad' placeholder='Ingrese su edad' />
                <Input required type='number' min={1} max={5} step={1} label='Grado' placeholder='Ingrese su grado' />
                <Input required type="email" label="Correo electrónico" placeholder="Ingrese su correo electrónico" />
                <Input required type="password" label="Contraseña" placeholder="Ingrese su contraseña" />
                <Input required type="password" label="Re-contraseña" placeholder="Repita su contraseña" />
                
                <div className='flex gap-4 items-center justify-center p-3'>
                <Button type='submit' color='success'>Iniciar Sesión</Button>
                <p className='text-sm'>¿Ya tienes cuenta? <Link href='/api/register'>Login</Link></p>
                </div>
                </form>
            </div>
    </section>
  )
}

export default page