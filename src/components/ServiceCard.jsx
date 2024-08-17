

export const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    // <div className="flex flex-1 border-2 rounded-md border-coral-red
    // justify-evenly drop-shadow-8xl">ServiceCard</div>
    <div className="flex-1 
    w-full rounded-[20px] shadow-3xl px-10 py-16 h-auto 
    hover:shadow-coral-red/30">
        <div className="w-11 h-11 flex justify-center items-center
            bg-coral-red rounded-full">
                <img src={imgURL} alt={label} width={24} height={24} />

        </div>
            <h3 className="mt-5 font-palanquin text-3xl
            leading-normal font-bold">{label}</h3>
            <p className="mt-3 break-words font-montserrat
        text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}
