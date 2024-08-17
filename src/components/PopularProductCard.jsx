import { star } from "../assets/icons"

export const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full max-sm:items-center">
        <img src={imgURL} alt={name}
        className="w-[280px] h-[280px]"></img>
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24}></img>
           
        </div>
             <p className="font-montserrat text-xl leading-normal
            text-slate-gray">(4.5)</p>
            <h3 className="mt-2 text-2xl leading-normal font-semibold
            font-palanquin">{name}</h3>
            <p className="mt-2 text-2xl font-montserrat text-coral-red
            leading-normal">{price}</p>
    </div>
  )
}
