import React from 'react'

export const SideNav = () => {
    return (
        <div>
            <nav className=" lg:w-56 md:w-48 px-5 lg:pt-20 ">
                <ul className='flex md:block md:px-5 sm:pr-3 xs:pr-3 justify-center'>
                    <li className="mt-5 cursor-pointer text-sm xs:text-xs truncate text-left xs:pr-3">
                        <span className="font-semibold text-gray-600 hover:text-gray-900">Featured</span>
                    </li>
                    <li className=" mt-5 cursor-pointer text-sm xs:text-xs truncate text-left xs:pr-3">
                        <span className="font-semibold text-gray-600 hover:text-gray-900">Cloud Compute</span>
                    </li>
                    <li className="mt-5 cursor-pointer text-sm xs:text-xs truncate text-left xs:pr-3">
                        <span className="font-semibold text-gray-600 hover:text-gray-900">Network & CDN</span>
                    </li>
                    <li className="mt-5 cursor-pointer text-sm xs:text-xs truncate text-left xs:pr-3">
                        <span className="font-semibold text-gray-600 hover:text-gray-900">Cloud Storage</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
