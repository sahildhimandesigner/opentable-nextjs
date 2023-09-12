import Link from "next/link";
import NavBar from "../../component/NavBar";
import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./Title";
import Rating from "./Rating";
import Description from "./Description";
import Images from "./Images";
import Reviews from "./Reviews";
import ReservationCard from "./ReservationCard";

export default function RestaurantDetails(){
    return(  
        <>
            <div className="bg-white w-[70%] text-black rounded p-3 shadow">
                <RestaurantNavBar />
                <Title />
                <Rating />
                <Description />
                <Images />
                <Reviews />
            </div>
            <div className="w-[27%] relative text-reg">
                <ReservationCard />
            </div>
        </>
    )
}