import React from 'react'

export const SingleCard = () => {
    return (
        <>
            <div className="h-full bg-white px-8 py-14 border shadow-xl rounded overflow-hidden text-left">
                <div className='mt-10 mb-5'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                    </svg>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Elastic Cloud Server</h1>
                    <p className="leading-relaxed mb-20">Launch scaleable cloud server in minutes</p>
                </div>

                <div>
                    <p className="leading-relaxed pb-2">starts at <span className='text-2xl text-primary font-medium'>$0.007 USD</span> /hour</p>
                    <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        View Cloud Pricing
                    </button>
                </div>
            </div>
        </>
    )
}
