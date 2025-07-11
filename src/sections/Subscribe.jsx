import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-center max-lg:flex-col
    items-center gap-10' id='contact-us'>
      <h3 className='text-4xl leading-[68px] font-palanquin font-bold'>Sign Up Form
        <span className='text-coral-red'> Updates</span> & Newslatter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center 
      max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='subscribe@nike.com' className='input'/>
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Sign Up" fullWidht/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe