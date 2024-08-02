'use client';

import userSchema from '@/zod/userZodSchema';
import { Button, Input, Link, Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { FaCalendarDay, FaCircleUser, FaGraduationCap, FaTransgender } from 'react-icons/fa6';
import { ZodError } from 'zod';

function Page() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    age: 10,
    grade: 1,
    email: '',
    password: '',
    rePassword: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, gender: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await userSchema.parseAsync({
        ...formData,
        gender: String(formData.gender),
        age: Number(formData.age),
        grade: Number(formData.grade)
      });

      console.log('Datos enviados: ', formData);
      setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          formattedErrors[err.path[0]] = err.message;
        });
        console.log(formattedErrors);
        setErrors(formattedErrors);
      } else {
        console.error('Error inesperado:', error);
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="w-8/12 py-10">
        <h2 className="text-success text-center text-xl p-3">Regístrate</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
          <div className='flex flex-col items-center justify-center'>
            <div className="flex items-center w-full">
              <FaCircleUser className='flex justify-center items-center h-full mx-2' size={30} />
              <Input
                required
                type="text"
                className='w-96'
                name="fullName"
                variant="bordered"
                label="Nombres completos"
                placeholder="Ingrese su nombre completo"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className="flex items-center w-full">
              <FaTransgender className='flex justify-center items-center h-full mx-2' size={30} />
              <Select required variant='bordered' className='w-96' placeholder='Ingrese su género' name='gender' onChange={handleGenderChange} value={formData.gender}>
                <SelectItem key={'M'} value="M">Masculino</SelectItem>
                <SelectItem key={'F'} value="F">Femenino</SelectItem>
              </Select>
            </div>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className="flex items-center w-full">
              <FaCalendarDay className='flex justify-center items-center h-full mx-2' size={30} />
              <Input
                required
                type="number"
                name="age"
                min={10}
                className='w-96'
                max={50}
                step={1}
                label="Edad"
                placeholder="Ingrese su edad"
                value={String(formData.age)}
                onChange={handleChange}
                variant='bordered'
              />
            </div>
            {errors.age && <p className="text-red-500">{errors.age}</p>}
          </div>


          <div className='flex flex-col items-center justify-center'>
          <div className="flex items-center w-full">
          <FaGraduationCap className='flex justify-center items-center h-full mx-2' size={30} />
          <Input
            required
            type="number"
            name="grade"
            min={1}
            max={5}
            step={1}
            label="Grado"
            className='w-96'
            variant='bordered'
            placeholder="Ingrese su grado"
            value={String(formData.grade)}
            onChange={handleChange}
          />
          </div>
          {errors.grade && <p className="text-red-500">{errors.grade}</p>}

          </div>

          

          <Input
            required
            type="email"
            name="email"
            label="Correo electrónico"
            placeholder="Ingrese su correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <Input
            required
            type="password"
            name="password"
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}

          <Input
            required
            type="password"
            name="rePassword"
            label="Re-contraseña"
            placeholder="Repita su contraseña"
            value={formData.rePassword}
            onChange={handleChange}
          />
          {errors.rePassword && <p className="text-red-500">{errors.rePassword}</p>}

          <div className="flex gap-4 items-center justify-center p-3">
            <Button type="submit" color="success">Registrarse</Button>
            <p className="text-sm">¿Ya tienes cuenta? <Link href="/api/register">Login</Link></p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Page;