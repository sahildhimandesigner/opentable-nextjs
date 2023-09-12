import Link from "next/link";
import { RestaurantType } from "../page";

interface Props {
  restaurant: RestaurantType;
}

const RestaurantCard = ({restaurant}:Props) => {
    return (
        <div
              className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
            >
              <Link href="/restaurant/milestones">
              <img
                src={restaurant.main_image}
                alt=""
                className="w-full h-36"
              />
              <div className="p-1 text-black">
                <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className=" mr-3">{restaurant.cusine.name}</p>
                  <p className="mr-3">$$$$</p>
                  <p>{restaurant.location.name}</p>
                </div>
                <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
              </div>
            </Link>
        </div>
    )
}

export default RestaurantCard;