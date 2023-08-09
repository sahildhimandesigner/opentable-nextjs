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
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                {/* NAVBAR */}
                <NavBar />
                {/* NAVBAR */} {/* HEADER */}
                <Header />
                {/* HEADER */} {/* DESCRIPTION PORTION */}
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
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
                </div>
            </main>
        </main>
    )
}