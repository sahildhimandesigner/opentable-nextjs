import Header from "../../../component/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../Menu";

const RestaurantMenuPage = ({
  children,
}:{
  children: React.ReactNode;
}) => {
    return(      
      <>  
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Menu />
        </div>
      </>
    )
}

export default RestaurantMenuPage;