import React from 'react'
import Header from './components/Header';

const RestaurantLayout = ({
    children,
  }:{
    children: React.ReactNode;
  }) => {
  return (
    <main>
        <Header />
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 text-black justify-between items-start 0 -mt-11">
            {children}
        </div>
    </main>
  )
}

export default RestaurantLayout;