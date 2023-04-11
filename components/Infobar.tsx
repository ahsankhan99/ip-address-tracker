import React from 'react'

const Infobar = ({ info }: any) => {


    return (
        <section className='grid grid-cols-1 rounded-lg top-40 absolute right-0 left-0 z-20 mx-auto p-4 bg-white w-[70%] h-72 md:h-32  md:grid-cols-4'>
            <div className='text-center text-xl font-semibold'>
                <h4 className='text-secondary text-sm sm:mb-4'>IP ADDRESS</h4>
                <h2>{info?.ip}</h2>
            </div>
            <div className='text-center text-xl font-semibold'>
                <h4 className='text-center text-secondary text-sm sm:mb-4 border-secondary sm:border-l-[0.5px]'>LOCATION</h4>
                {info && <h2>{info?.location?.region}, {info?.location?.country}</h2>}
            </div>
            <div className='text-center text-xl font-semibold'>
                <h4 className='text-center text-secondary text-sm sm:mb-4 border-secondary sm:border-l-[0.5px]'>TIMEZONE</h4>
                <h2>{info?.location?.timezone}</h2>
            </div>
            <div className='text-center text-xl font-semibold'>
                <h4 className='text-center text-secondary text-sm sm:mb-4 border-secondary sm:border-l-[0.5px]'>ISP</h4>
                <h2>{info?.as?.name}</h2>
            </div>

        </section>
    )
}

export default Infobar