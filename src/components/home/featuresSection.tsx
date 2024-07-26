import { Chip } from '@nextui-org/react';
import React from 'react'
import { FaBuffer, FaKitMedical, FaUserDoctor, FaBookMedical } from "react-icons/fa6";

function FeaturesSection() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='font-bold text-center flex flex-col justify-center items-center text-xl p-3'>
        <FaBuffer size={75} className='text-success' />
        <h2 className='text-success p-3'>Caracteristicas</h2>

        <p className='mb-5'>
          Mind Tracer cuenta con características que te ayudan a identificar patrones de enfermedades y a tomar decisiones más precisas en tus enfermedades.
        </p>

        <div className='flex flex-col gap-4 mt-2 md:flex-row items-center justify-center'>
          <div>
            <Chip startContent={
              <FaKitMedical size={20} className='text-success' />
            } endContent={
              <FaKitMedical size={20} className='text-success' />
            } className='w-max px-5'>Identificación de patrones</Chip>
          </div>

          <div>
            <Chip startContent={
              <FaUserDoctor size={20} className='text-success' />
            } endContent={
              <FaUserDoctor size={20} className='text-success' />
            } className='w-max px-5'>Alertas a profesionales de salud</Chip>
          </div>
          <div>
            <Chip startContent={
              <FaBookMedical size={20} className='text-success' />
            } endContent={
              <FaBookMedical size={20} className='text-success' />
            } className='w-max px-5'>Informes detallados</Chip>
          </div>

        </div>
      </div>

    </section>
  )
}

export default FeaturesSection