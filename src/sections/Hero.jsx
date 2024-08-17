import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
// import {}

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container
     '
    >
      
      <div className="relative xl:w-2/5 flex flex-col
      justify-center items-start w-full max-xl:padding-x 
      pt-28"> 
        <p className="text-xl font-montserrat"> Our Summer Collection </p>
        <h1 className="mt-10 font-palanquin text-8xl
        max-sm:text-[72px] max-sm:leading-normal
        font-bold">
          <span className="xl:bg-white
          xl:whitespace-nowrap relative z-10 pr-10"> The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block
          mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat font-semibold
        text-lg text-slate-gray leading-8 mt-3 mb-14
        sm:max-w-sm">Discover Stylish Discover Stylish Discover Stylish
        Discover Stylish Discover Stylish
        </p>
        <Button label="Shop now" iconUrl={arrowRight}/>
        <div className="flex flex-wrap justify-start
        items-center w-full mt-20 gap-16">
          {statistics.map((stats,index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
              <p className="leading-8 font-montserrat
              text-slate-gray">{stats.label}</p>
            </div>
          )

          )}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center
      items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero
      bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe colection" 
        width={610} height={500} 
        className="object-contain relative z-10"></img>

        <div className="flex absolute sm:gap-6 gap-4 -bottom-[5%]
         max-sm:px-6">
          {shoes.map((shoe,i)=>(
            <div key={i}>
              <ShoeCard imgUrl={shoe} 
              changeBigShoeImage={(shoes) => setBigShoeImg(shoes)}
              bigShoeImg={bigShoeImg}/>
            </div>
            
          ))
          
          
          }
        </div>
      </div>
    </section>
  )
}

export default Hero