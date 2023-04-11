import React from 'react'

const Infobar = () => {
    return (
        <section className='grid grid-cols-1 absolute right-0 left-0 z-20 mx-auto p-4 bg-white w-[70%] h-32 rounded-lg top-40 sm:grid-cols-4'>
            <h4 className='text-center text-secondary font-semibold text-sm'>IP ADDRESS</h4>
            <h4 className='text-center text-secondary font-semibold text-sm border-secondary sm:border-l-[0.5px]'>LOCATION</h4>
            <h4 className='text-center text-secondary font-semibold text-sm border-secondary sm:border-l-[0.5px]'>TIMEZONE</h4>
            <h4 className='text-center text-secondary font-semibold text-sm border-secondary sm:border-l-[0.5px]'>ISP</h4>
        </section>
    )
}

export default Infobar