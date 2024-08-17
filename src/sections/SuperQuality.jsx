import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    // <section id="aboutUs" className="max-container max-sm:mt-12">
    //   <div className="flex gap-6 max-wide:flex-row max-sm:flex-col-reverse">
    //     <p className="max-sm:leading-[82] font-montserrat font-semibold text-4xl">We Provide You
    //        <span className="text-coral-red"> Super Quality </span>  
    //     Shoes</p>
    //     <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero est qui sapiente atque facere itaque suscipit quos iste, perspiciatis, asperiores aliquam explicabo. Quasi omnis, quae aut non eveniet voluptates quis.</p>
    //   </div>
    // </section>
    <section id="about-us" className="flex justify-between
    items-center max-lg:flex-col-reverse gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
         <h2 className="font-palanquin text-4xl capitalize
        font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality </span> Shoes
         
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum odit, deleniti, quaerat deserunt quos, aperiam ullam repudiandae corrupti aliquid voluptatum? Numquam maxime vitae voluptates qui voluptatum adipisci doloribus vero.
        </p>
        <p className="mt-6 lg:max-w-full info-text">Our dedictaion lorasdasdasd</p>
        <div className="mt-11">
          <Button label="View Detail"/>
        </div>
        
      
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe quality" width={570} height={280}
        className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality