import React from 'react'

const Hero = () => {
  return (
    <section className='Hero bg-slate-900 h-screen flex items-center justify-center bg-cover bg-center'>
      <div className="text-white text-center px-4 md:px-16">
        <h1 className='text-white text-bold text-6xl'>Fabrics world</h1>
        <p className='text-center text-white mt-4 text-2xl'>
          Hurry up get ammazing cutprice on all ladies suits!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold">
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Hero
