import { Chip } from '@nextui-org/react';
import React from 'react'
import { FaBuffer, FaKitMedical, FaUserDoctor, FaBookMedical } from "react-icons/fa6";

function FeaturesSection() {
  return (
    <section className='w-8/12 py-10'>
      <div className='flex flex-col items-center justify-center text-center'>
        <FaBuffer size={50} className='text-success' />
        <h2 className='text-success text-xl p-3'>Caracteristicas</h2>

        <p className='text-sm'>
          Mind Tracer cuenta con características que te ayudan a identificar patrones de enfermedades y a tomar decisiones más precisas en tus enfermedades.
        </p>

        <div className='flex flex-col gap-4 md:flex-row flex-wrap items-center justify-center pb-4'>
          <div className='pt-4 md:pt-4'>
            <Chip startContent={
              <FaKitMedical size={20} className='text-success' />
            } endContent={
              <FaKitMedical size={20} className='text-success' />
            } className='w-max px-5'>Identificación de patrones</Chip>
          </div>

          <div className='pt-0 md:pt-2'>
            <Chip startContent={
              <FaUserDoctor size={20} className='text-success' />
            } endContent={
              <FaUserDoctor size={20} className='text-success' />
            } className='w-max px-5'>Alertas a profesionales de salud</Chip>
          </div>
          <div className='pt-0 md:pt-2'>
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