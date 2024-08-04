'use client'
import EmailInput from '@/components/inputs/emailInput'
import LoginSubmitButton from '@/components/inputs/loginSubmitButton'
import PasswordInput from '@/components/inputs/passwordInput'
import userLoginSchema from '@/zod/userLoginSchema'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaArrowRightToBracket } from 'react-icons/fa6'
import { ZodError } from 'zod'

function Page() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setErrors({});
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await userLoginSchema.parseAsync({
        email: formData.email,
        password: formData.password
      });
      
      const registerResponse = await fetch('/api/login', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if(registerResponse.ok){
        router.push('/');
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
          <FaArrowRightToBracket className='flex justify-center text-success items-center h-full mx-2' size={30} />
          <h2 className="text-success text-center text-xl p-3">Regístrate</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
          <EmailInput error={errors.email} handleChange={handleChange} email={formData.email} />
          <PasswordInput error={errors.password} handleChange={handleChange} password={formData.password} />

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center p-3">
            <LoginSubmitButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </section>

  )
}

export default Page