const ShoeCard = ({imgUrl, changeBigShoeImage
    ,bigShoeImg
}) => {
    const handleClick = () =>{
        console.log(imgUrl.bigShoe);
        if(bigShoeImg !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    };
  return (
    <div className={`
    border-2 rounded-xl 
    ${bigShoeImg === imgUrl.bigShoe
        ? "border-coral-red"
        : "border-transparent"}
    cursor-pointer max-sm:flex-1`}
    onClick={handleClick}>
        <div className="flex justify-center items-center bg-card
         bg-center bg-cover sm:h-40 rounded-xl mx-sm:p-4">
            <img src={imgUrl.thumbnail}
            alt="shoe Collection"
            width={127}
            height={103}
            className="object-contain"/>
        </div>
    </div>
  )
}

export default ShoeCard