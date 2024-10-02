import React from 'react'


function Header() {
  return (
    <app-header> 
      <div className='bg-accent w-full h-16 flex justify-center items-center'>
        <div>
          <img></img>
        </div>

        <div className='ml-4 space-x-6'>
          <a className='cursor-pointer font-semibold text-lg text-text'>
            Beranda
          </a>
          <a className='cursor-pointer font-semibold text-lg text-text'>
            Cek Transaksi
          </a>
          <a className='cursor-pointer font-semibold text-lg text-text'>
            Kalkulator
          </a>

        </div>
      </div>
      

      

    </app-header>
  )
}

export default Header