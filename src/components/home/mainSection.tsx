import Image from 'next/image'
import React from 'react'
import { FaHandHoldingMedical } from "react-icons/fa6";

function MainSection() {
  return (
    <section className="flex flex-col items-center justify-center">
        <div className= {`font-bold text-center flex flex-col justify-center items-center text-xl p-3 mb-5`}>
            <FaHandHoldingMedical size={75} className='text-success' />
            <h1 className='text-success p-3'>Mind Tracer</h1>
            <p>Mind tracer es una sistema web que hace uso de la inteligencia artificial para ayudar a las instituciones educativas a identificar patrones de depresion para que puedan ser tratados por el profesional de la salud mental correspondiente, garantizando que el tratamiento sea efectivo y a tiempo.</p>
        </div>
    </section>
  )
}

export default MainSection