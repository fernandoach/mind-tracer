import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from '@nextui-org/react'
import React from 'react'
import { FaNetworkWired, FaHandHoldingMedical } from 'react-icons/fa6'
import CardHowWork from './cardHowWork'

function HowWorkSection() {
  return (
    <section className='w-8/12 py-10' id='comofunciona'>
      <div className={`flex flex-col items-center justify-center text-center`}>
          <FaNetworkWired size={50} className='text-success' />
          <h2 className='text-success text-xl p-3'>¿Cómo funciona?</h2>
      </div>
      <div className='flex flex-col gap-4 md:flex-row flex-wrap items-center justify-center pb-4'>
        <CardHowWork title='1. Test de Apercepción Temática (TAT)' content='Los estudiantes completan el Test de Apercepción Temática, un método proyectivo que evalúa patrones de pensamiento, actitudes y respuestas emocionales.'/>        
        <CardHowWork title='2. Procesamiento de Lenguaje Natural (NLP)' content='Utilizamos NLP para analizar las narrativas generadas en el TAT, identificando temas y patrones emocionales.'/>        
        <CardHowWork title='3. Modelos de Aprendizaje Automático' content='Los algoritmos de aprendizaje automático analizan las características extraídas para identificar patrones que puedan indicar depresión.'/>        
        <CardHowWork title='4. Generación de Output' content='El sistema utiliza el Inventario de la Depresión de Beck II (BDI-II) para cuantificar el nivel de depresión del estudiante basado en el análisis del TAT.'/>        
        <CardHowWork title='5. Derivación a Profesionales' content='Las evaluaciones generadas por el BDI-II se envían a los profesionales de salud mental de la institución para una evaluación más detallada.'/>        
      </div>
    </section>
  )
}

export default HowWorkSection