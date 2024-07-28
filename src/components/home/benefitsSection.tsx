import { Chip } from '@nextui-org/react'
import React from 'react'
import { FaHeartCirclePlus, FaCheck } from 'react-icons/fa6'

function BenefitsSection() {
    return (
        <section className="w-8/12 py-10" id='beneficios'>
            <div className={`flex flex-col items-center justify-center text-center`}>
                <FaHeartCirclePlus size={50} className='text-success' />
                <h2 className='text-success text-xl p-3'>Beneficios</h2>
                <p className='text-sm'>El sistema Mind Tracer, al utilizar inteligencia artificial para identificar patrones de depresión en estudiantes, podría ofrecer varios beneficios significativos para las instituciones educativas y los estudiantes mismos:</p>
                <div className='flex flex-col gap-4 md:flex-row flex-wrap items-center justify-center pb-4'>
                    <div className='pt-4 md:pt-4'>
                        <Chip startContent={
                            <FaCheck size={20} className='text-success' />
                        } className='w-max px-5'>Detección temprana de depresión.</Chip>
                    </div>

                    <div className='pt-0 md:pt-2'>
                        <Chip startContent={
                            <FaCheck size={20} className='text-success' />
                        } className='w-max px-5'>Intervención efectiva en caso de depresión.</Chip>
                    </div>

                    <div className='pt-0 md:pt-2'>
                        <Chip startContent={
                            <FaCheck size={20} className='text-success' />
                        } className='w-max px-5'>Apoyo a educadores y administradores.</Chip>
                    </div>

                    <div className='pt-0 md:pt-2'>
                        <Chip startContent={
                            <FaCheck size={20} className='text-success' />
                        } className='w-max px-5'>Mejora el entorno escolar.</Chip>
                    </div>

                    <div className='pt-0 md:pt-2'>
                        <Chip startContent={
                            <FaCheck size={20} className='text-success' />
                        } className='w-max px-5'>Datos y estadisticas detallados.</Chip>
                    </div>

                    <div className='pt-0 md:pt-2'>
                        <Chip startContent={
                            <FaCheck size={20} className='text-success' />
                        } className='w-max px-5'>Confidencialidad y privacidad.</Chip>
                    </div>

                    <div className='pt-0 md:pt-2'>
                        <Chip startContent={
                            <FaCheck size={20} className='text-success' />
                        } className='w-max px-5'>Capacitación y sensibilización.</Chip>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection