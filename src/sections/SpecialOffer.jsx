import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    // <section id='special-offer' className='flex flex-row-reverse 
    // max-sm:flex-col-reverse gap-6'>
    //    <div className="flex flex-col w-full flex-nowrap">
    //      <h2 className="font-palanquin text-4xl capitalize
    //     font-bold lg:max-w-lg">
    //       <p className='text-coral-red inline-block'>Special</p> Offer
    //     </h2>
    //     <p className="mt-4 lg:max-w-lg info-text">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum odit, deleniti, quaerat deserunt quos, aperiam ullam repudiandae corrupti aliquid voluptatum? Numquam maxime vitae voluptates qui voluptatum adipisci doloribus vero.
    //     </p>
    //     <p className="mt-6 lg:max-w-full info-text">Our dedictaion lorasdasdasd</p>
    //     <div className="mt-11">
    //       <Button label="View Detail"/>
    //     </div>
        
      
    //   </div>
    //   <div className=''>
    //     <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, reiciendis illum? Quas debitis veniam quis voluptas cupiditate! At maiores molestiae, deleniti tenetur architecto aliquam dicta ad reprehenderit suscipit non rerum!</h1>
    //   </div>
    // </section>
    <section className='flex items-center
    max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 max-xl:ml-32 max-temp:ml-16'>
        <img src={offer} alt="special" width={773} height={687}
        className='object-contain w-full' />
      </div>
      <div className="flex flex-1 flex-col">
         <h2 className="font-palanquin text-4xl capitalize
        font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
         
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum odit, deleniti, quaerat deserunt quos, aperiam ullam repudiandae corrupti aliquid voluptatum? Numquam maxime vitae voluptates qui voluptatum adipisci doloribus vero.
        </p>
        <p className="mt-6 lg:max-w-full info-text">Our dedictaion lorasdasdasd</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More"
          bgColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"/>
        </div>
        
      
      </div>
    </section>
  )
}

export default SpecialOffer