import { Button } from '@nextui-org/react';
import React from 'react'
import { FaHandHoldingMedical, FaCircleQuestion, FaArrowRightFromBracket } from "react-icons/fa6";

function MainSection() {
  return (
    <section className="w-8/12 py-10">
        <div className= {`flex flex-col items-center justify-center text-center`}>
          <FaHandHoldingMedical size={75} className='text-success' />
          <h1 className='text-3xl text-success p-2'>Mind Tracer</h1>
          <p className='text-sm'>Mind tracer es una sistema web que hace uso de la inteligencia artificial para ayudar a las instituciones educativas a identificar patrones de depresion para que puedan ser tratados por el profesional de la salud mental correspondiente, garantizando que el tratamiento sea efectivo y a tiempo.</p>
          <div className='flex gap-4 items-center justify-center p-3'>
            <Button as="a" href='/api/register' startContent={<FaArrowRightFromBracket />} color='success' size='md'>Comenzar</Button>
            <Button as="a" href='#' startContent={<FaCircleQuestion />} color='secondary' size='md'>Preguntas <br />frecuentes</Button>
          </div>
        </div>
    </section>
  )
}

export default MainSection