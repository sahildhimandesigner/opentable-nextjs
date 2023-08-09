"use client";

import { Inter } from '@next/font/google'
import NavBar from './component/NavBar';
import Header from './component/Header';
import RestaurantCard from './component/RestaurantCard';

const inter = Inter({ subsets: ['latin'] }) 

export default function Home() {
  
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <Header />
          {/* HEADER */} {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            {/* CARD */}
            <RestaurantCard />
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  )
}
