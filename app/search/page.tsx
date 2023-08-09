import NavBar from "../component/NavBar";
import Header from "./component/Header";
import RestaurantCard from "./component/RestaurantCard";
import SearchSideBar from "./component/SearchSidebar";

const Search = () => {
    return(
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                {/* NAVBAR */}
                <NavBar />
                {/* HEADER */}
                <Header />
                <div className="flex py-4 m-auto text-black w-2/3 justify-between items-start">
                {/* SEARCH SIDE BAR */}
                <SearchSideBar />
                {/* SEARCH SIDE BAR */}
                <RestaurantCard />
            </div>
        </main>
    </main>
    )
}

export default Search;