import React, { useEffect, useState } from 'react'
import ipify from 'ipify2';

const Header = ({ setInfo }: any) => {
    const [ip, setIP] = useState('');

    useEffect(() => {
        ipify.ipv4().then(ipv4 => setIP(ipv4)).catch(err => console.log(err));
    }, [])

    const clickHandler = async () => {

        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_MAP_API}&ipAddress=${ip}&domain=${ip}`);
        const data = await response.json();
        console.log(data);
        setInfo(data);
    }

    return (
        <header className='h-[30vh] flex flex-col items-center bg-cover bg-mobile-pattern-bg w-full
    bg-center-bottom bg-no-repeat sm:bg-desktop-pattern-bg'>
            <h1 className='text-white text-2xl mt-6 mb-8'>IP Address Tracker</h1>
            <div className='flex'>
                <input value={ip} onChange={(e) => setIP(e.target.value)} className='outline-none text-primary sm:w-[440px] h-12 px-3 py-2 rounded-l-lg' type="text"
                    id="search" name="search" placeholder='Search for any IP address or domain' />
                <div onClick={clickHandler} className='cursor-pointer bg-black w-12 h-12 rounded-r-lg
        flex items-center justify-center hover:bg-primary'>
                    <img src='/images/icon-arrow.svg' />
                </div>
            </div>
        </header>
    )
}

export default Header