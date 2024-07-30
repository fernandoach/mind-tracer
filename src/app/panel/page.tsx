import PanelCardComponent from '@/components/panel/panelCardComponent'
import React from 'react'

function page() {
  return (
    <main className="flex flex-col items-center justify-center">
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

export default page