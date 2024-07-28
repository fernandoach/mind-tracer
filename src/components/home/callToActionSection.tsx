import { Button } from '@nextui-org/react'
import React from 'react'
import { FaArrowRightFromBracket, FaCircleQuestion, FaPhone } from 'react-icons/fa6'

function CallToActionSection() {
  return (
    <section className='w-8/12 py-10' id='llamadoaccion'>
        <div className={`flex flex-col items-center justify-center text-center`}>
            <FaPhone  size={50} className='text-success' />
            <h2 className='text-success text-xl p-3'>Llamado a la acción</h2>
        </div>

        <div className='flex flex-col items-center justify-center text-center'>
            <h3 className='text-large text-success'>¡Involúcrate y Mejora el Bienestar Emocional en tu Institución!</h3>
            <p className='text-sm p-5'>En Mind Tracer, estamos comprometidos con la identificación temprana y el tratamiento eficaz de la depresión en estudiantes. Únete a nosotros para crear un entorno educativo más saludable y seguro.</p>
        </div>

        <div>
        <div className='flex gap-4 items-center justify-center p-3'>
            <Button as="a" href='/api/register' startContent={<FaArrowRightFromBracket />} color='success' className='text-center' size='md'>Regístrate <br />Ahora</Button>
            <Button as="a" href='#' startContent={<FaCircleQuestion />} color='secondary' size='md'>Contáctanos</Button>
          </div>    
        </div>
    </section>
  )
}

export default CallToActionSection