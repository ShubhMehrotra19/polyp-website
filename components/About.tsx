import React from 'react'

interface Props {}

function About(props: Props) {
    const {} = props

    return (
        <section className=' max-w-6xl flex flex-col mx-auto'>
        <section className="h-auto">
            <div className="px-10 pt-24 pb-12 mx-auto max-w-7xl">
                <div className="w-full mx-auto text-left md:text-center">
                    <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-100 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight"> How we <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">use Poly v5</span> for<br className="lg:block hidden" /> brining excllence to you. </h1>
                    <p className="px-0 text-lg text-gray-300 md:text-xl lg:px-24"> Poly v5 is our advanced AI-powered software designed to assist healthcare professionals in the detection and analysis of polyps in medical images. Leveraging state-of-the-art machine learning algorithms, Poly v5 accurately identifies and highlights polyps, providing clinicians with valuable insights to guide diagnosis and treatment decisions. </p>
                </div>
            </div>
        </section>
        <section className="py-20">
  <div className="container items-center max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-100 tracking-tight sm:text-4xl font-heading">Key Features of Poly v5</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-200 xl:mb-6">Polyps are abnormal tissue growths that can occur in various parts of the body, including the colon, stomach, and uterus. While some polyps are benign, others can develop into cancer over time if left untreated. Early detection of polyps is crucial for timely intervention and improved patient outcomes.</p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
              <span className="font-medium text-gray-300">Enhanced Efficiency</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              <span className="font-medium text-gray-300">Real-time Analysis</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <span className="font-medium text-gray-300">Integration Compatibility</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="/illustration.png" alt="feature image" /></div>
    </div>
  </div>
</section>

        </section>
    )
}

export default About
