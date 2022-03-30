import React from 'react'
import productsData from '../data/productsData'

export const Card = () => {
    return (
        <div>
            <section class="text-gray-600 bg-lightBlue px-2">
                <div class="max-w-screen-xl px-4 mx-auto lg:px-3">
                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
                        {productsData.map(product => (
                            <a
                                class="block p-6 transition border shadow-xl rounded bg-white"
                                href="/services/digital-campaigns"
                            >
                                <svg
                                    xmlns={product?.logo}
                                    class="w-10 h-10 text-blue-500"
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

                                <h3 class="mt-3 text-lg font-semibold text-black">{product?.title}</h3>

                                <p class="mt-1 text-sm text-gray-700">
                                    {product?.desc}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}