"use client";

import { Inter } from '@next/font/google'
import Header from './component/Header';
import RestaurantCard from './component/RestaurantCard';

const inter = Inter({ subsets: ['latin'] }) 

export default function Home() {
  
  return (
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
  )
}
