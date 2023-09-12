import Header from './component/Header';
import RestaurantCard from './component/RestaurantCard';
import { PrismaClient, Cuisine, Location, PRICE } from '@prisma/client';

export interface RestaurantType {
  id: number;
  name: string;
  main_image: string;
  cusine: Cuisine;
  location: Location;
  price: PRICE;
}

const prisma = new PrismaClient();

const fetchRestaurants = async () => {
  const restaurant = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cusine: true,
      location: true,
      price:true
    }
  });
  return restaurant;
}

export default async function Home() {
  const restaurantData = await fetchRestaurants();
  
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        {restaurantData.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />
        })}
        
      </div>
    </main>
  )
}
