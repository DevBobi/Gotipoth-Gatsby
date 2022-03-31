import React from 'react'
import { SideNav } from '../SideNav'
import { Card } from '../Card'
import { SingleCard } from '../SingleCard'

export const ProductLayout = () => {
    return (
        <div>
            {/* Sidebar */}
            <div className=" md:flex lg:bg-lightBlue md:bg-white sm:bg-white xs:bg-white pb-20">
                <SideNav />
                {/* All cards will be here */}
                <div className="flex flex-wrap justify-center my-5">
                    {/* Left side card */}
                    <div className="lg:w-1/3 sm:hidden md:hidden xs:hidden lg:block sm:bg-white">
                        <SingleCard />
                    </div>
                    {/* Side Grid Will be here */}
                    <div className="flex flex-wrap lg:w-2/3">
                        <Card />
                    </div>
                </div>
            </div>

        </div>
    )
}
