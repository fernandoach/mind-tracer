import NavBar from '@/components/navbar/navbar'
import { Button, Input, Link } from '@nextui-org/react'
import React from 'react'

function page() {
  return (
    <section className="flex flex-col items-center justify-center">
        <div className='w-8/12 py-10'>
            <h2 className='text-success text-xl p-3'>Iniciar Sesión</h2>
                <form action="" method='post' className='flex flex-col items-center justify-center gap-4'>
                <Input required type="email" label="Correo electrónico" placeholder="Ingrese su correo electrónico" />
                <Input required type="password" label="Contraseña" placeholder="Ingrese su contraseña" />
                <div className='flex gap-4 items-center justify-center p-3'>
                <Button type='submit' color='success'>Iniciar Sesión</Button>
                <p className='text-sm'>¿No tienes cuenta? <Link href='/register'>Registrate</Link></p>
                </div>
                </form>
            </div>
    </section>

  )
}

export default page