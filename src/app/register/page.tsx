'use client';

import AgeInput from '@/components/inputs/ageInput';
import EmailInput from '@/components/inputs/emailInput';
import FullNameInput from '@/components/inputs/fullNameInput';
import GenderInput from '@/components/inputs/genderInput';
import GradeInput from '@/components/inputs/gradeInput';
import LoginLink from '@/components/inputs/loginLink';
import PasswordInput from '@/components/inputs/passwordInput';
import RePasswordInput from '@/components/inputs/rePasswordInput';
import SubmitButton from '@/components/inputs/submitButton';
import userRegisterSchema from '@/zod/userRegisterSchema';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaAddressBook } from 'react-icons/fa6';
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

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setErrors({});
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await userRegisterSchema.parseAsync({
        ...formData,
        gender: String(formData.gender),
        age: Number(formData.age),
        grade: Number(formData.grade)
      });

      const registerResponse = await fetch('/api/register', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if(registerResponse.ok){
        router.push('/login');
      }
      if(!registerResponse.ok){
          setIsSubmitting(false);
          const errorData = await registerResponse.json();
          setErrors({
            email: errorData.message
          });
      }
      
      
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          formattedErrors[err.path[0]] = err.message;
        });
        setErrors(formattedErrors);
        setIsSubmitting(false);
      } else {
        console.error('Error inesperado:', error);
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-md py-10 mx-auto">
        <div className='flex items-center justify-center w-full mb-4'>
          <FaAddressBook className='flex justify-center text-success items-center h-full mx-2' size={30} />
          <h2 className="text-success text-center text-xl p-3">Regístrate</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
          
          <FullNameInput error={errors.fullName} fullName={formData.fullName} handleChange={handleChange} />
          <GenderInput error={errors.gender} handleChange={handleGenderChange}  gender={formData.gender} />
          <AgeInput error={errors.age} handleChange={handleChange} age={formData.age} />
          <GradeInput error={errors.grade} handleChange={handleChange} grade={formData.grade} />
          <EmailInput error={errors.email} handleChange={handleChange} email={formData.email} />
          <PasswordInput error={errors.password} handleChange={handleChange} password={formData.password} />
          <RePasswordInput error={errors.rePassword} handleChange={handleChange} rePassword={formData.rePassword} />

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center p-3">
            <SubmitButton isSubmitting={isSubmitting} />
            <LoginLink />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Page;