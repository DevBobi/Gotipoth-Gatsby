import React from 'react'

export const SideNav = () => {
    return (
        <div>
            <nav className=" lg:w-56 md:w-48 px-5 lg:pt-20 ">
                <ul className='flex md:block md:px-5 justify-center'>
                    <li className="space-x-2 mt-5 cursor-pointer text-sm text-left">
                        <span className="font-semibold">Featured</span>
                    </li>
                    <li className=" mt-5 cursor-pointer text-sm text-left">
                        <span className="font-semibold">Cloud Compute</span>
                    </li>
                    <li className="mt-5 cursor-pointer text-sm text-left">
                        <span className="font-semibold">Network & CDN</span>
                    </li>
                    <li className="mt-5 cursor-pointer text-sm text-left">
                        <span className="font-semibold">Cloud Storage</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
