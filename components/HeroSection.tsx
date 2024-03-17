import React from 'react'

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
            We make Polyp Detection more accurate and easier through AI.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-gray-400">
          Experience swift and precise polyp detection with Poly v5, powered by cutting-edge Machine Learning technology. Detect polyps in seconds with unparalleled accuracy.
          </p>
          <div className="mt-8">
            <button
              type="button"
              className="rounded-md bg-white hover:scale-105 transition-all duration-300 ease-in-out px-3 py-2.5 text-sm font-semibold text-slate-900 shadow-sm"
            >
              Try us
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-gray-400 p-2 md:w-full md:mx-0 mx-10 md:h-full">
        <iframe className='w-full rounded-md hover:scale-[98%] duration-300 transition ease-in-out md:h-[600px] h-[450px]' src="https://www.youtube.com/embed/kQK092Blth8?si=NPIl6jzCOogQcOfS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}
