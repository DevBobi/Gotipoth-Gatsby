import React from 'react'
import { SideNav } from '../SideNav'
import { Card } from '../Card'
import { SingleCard } from '../SingleCard'

export const ProductLayout = () => {
    return (
        <div>
            {/* Sidebar */}
            <div className=" md:flex bg-lightBlue ">
                <SideNav />
                {/* All cards will be here */}
                <div class="flex flex-wrap justify-center my-5">
                    {/* Left side card */}
                    <div class="lg:w-1/3 sm:hidden md:hidden lg:block">
                        <SingleCard />
                    </div>
                    {/* Side Grid Will be here */}
                    <div class="flex flex-wrap lg:w-2/3">
                        <Card />
                    </div>
                </div>
            </div>

        </div>
    )
}
