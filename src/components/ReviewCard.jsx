import { star } from "../assets/icons"


const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <img src={imgURL} alt={customerName} className="rounded-full object-cover
      w-[120px] h-[120px]"/>
      <p className="font-palanquin mt-6 max-w-sm info-text text-center">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="" width={24} height={24} className="object-contain
        m-0"/>
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="font-montserrat mt-1 text-3xl text-center font-bold">{customerName}</h3>
    </div>
    
  )
}

export default ReviewCard