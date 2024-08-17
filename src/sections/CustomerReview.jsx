import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReview = () => {
  return (
    <section id="customer-review" className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold
      ">What Our <span className="text-coral-red">Customers </span>
      Say?</h3>
      <p className="info-text m-auto mt-4 max-w-3xl text-center font-palanquin ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi impedit cupiditate suscipit ut quibusdam, voluptate dolores non, maxime facilis!</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center 
      max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReview