

export const Button = ({label, iconURL,bgColor,borderColor, textColor,
  fullWidht
}) => {
  return (
    <button className={`flex justify-center items-center
    gap-2 px-7 py-4 border font-montserrat text-lg
    leading-none
      ${bgColor ? `${bgColor} ${textColor} ${borderColor}`: 
        `bg-coral-red border-coral-red text-white`}
    
    
     rounded-full ${fullWidht ? "w-full" : ""}"`}>
        {label}
       {iconURL ? <img src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"/> : null
       } 
    </button>
  )
}

export default Button