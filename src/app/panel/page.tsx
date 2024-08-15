'use client'

import PanelCardComponent from '@/components/panel/panelCardComponent'
import { stringifyError } from 'next/dist/shared/lib/utils';
import { stringify } from 'querystring';
import React from 'react'

function Page() {
  const [idbData, setIdbData] = React.useState<any | null>(null)
  const [loading, setLoading] = React.useState(true); // Estado para manejar la carga
  const [error, setError] = React.useState(null); // Estado para manejar errores

  const fetchData = async () : Promise<{ fullname: string; email: string; role: string } | null> => {
    try {
      const response = await fetch('/api/panel/idb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching user data');
      }

      const data = await response.json();
      setIdbData(data.respuestas);
      return data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData(); // Llama a la función fetchData al montar el componente
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Muestra un mensaje de error
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <h1>{stringify(idbData)}</h1>
        <div className='w-max py-10 flex flex-col items-center justify-center'>
            <h2 className='text-success text-xl p-3'>Panel</h2>
            <div className='flex flex-col gap-4 md:flex-row md:flex-wrap items-center justify-center pb-4'>
    <PanelCardComponent testName={'IDB'} testPercentage={50} />
    <PanelCardComponent testName={'TAT'} testPercentage={20} />
</div>
        </div>
    </main>
  )
}

export default Page