import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Reviews = () => {
    const reviewsData = [
        { id: 1, text: 'Review 1 text' },
        { id: 2, text: 'Review 2 text' },
        { id: 3, text: 'Review 3 text' },
    ];

    const [currentReview, setCurrentReview] = useState(0);

    const handleNextReview = () => {
        setCurrentReview((prevReview) => (prevReview + 1) % reviewsData.length);
    };

    const handlePrevReview = () => {
        setCurrentReview((prevReview) => (prevReview - 1 + reviewsData.length) % reviewsData.length);
    };

    return (
        <div className="bg-gray-200">
            <section className="relative  md:py-8 bg-white overflow-x-hidden">
                <div className="relative container px-4 mx-auto mb-10 lg:mb-10">
                    <div className="flex flex-wrap items-center">
                        <h2 className="mb-10 lg:mb-0 w-full lg:w-auto text-5xl text-black font-bold font-heading">What
                            Customers Say</h2>
                        <div className="flex w-full lg:w-auto lg:ml-auto">
                            <div
                                // className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={handlePrevReview}
                            >
                                <FaArrowLeft className="text-blue-500 hover:text-blue-600" size={24}/>
                            </div>
                            <div
                                // className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={handleNextReview}
                            >
                                <FaArrowRight className="text-blue-500 hover:text-blue-600" size={24}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap lg:-ml-96">
                    <div className="hidden lg:block opacity-50 flex-shrink-0 w-full max-w-md px-3">
                        <div className="px-8 py-16 border border-white">
                            <div className="relative px-4 mx-auto">
                                <div className="px-4 md:px-10">
                                    <h3 className="mb-8 text-xl font-bold font-heading text-white">Thanks, feugiat
                                        tellus a sad tincidunt ultrices. Phasellus non libero tempus odio vestibulum
                                        ultricies.</h3>
                                    <div className="flex flex-wrap items-center">
                                        <p className="mb-6 md:mb-0 text-gray-300">TIA O’Halleran, NYC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-full lg:max-w-md px-3 lg:mt-20 mb-6 lg:mb-0">
                        <div className="px-8 py-16 bg-blue-300">
                            <div className="relative px-4 mx-auto">
                                <div className="px-4 md:px-10">
                                    <h3 className="mb-8 text-xl font-bold font-heading text-white">Tonight I had
                                        interdum at ante porta, eleifend feugiat nunc. In semper euismod me a accumsan.
                                        Thanks! 👏💥</h3>
                                    <div className="flex flex-wrap items-center">
                                        <p className="mb-6 md:mb-0 text-white">Alice Kenowski, NYC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-full lg:max-w-md px-3 mb-6 lg:mb-0">
                        <div className="px-8 py-16 bg-blue-300">
                            <div className="relative px-4 mx-auto">
                                <div className="px-4 md:px-10">
                                    <h3 className="mb-8 text-xl font-bold font-heading text-white">Thanks, feugiat
                                        tellus a sad tincidunt ultrices. Phasellus non libero tempus odio vestibulum
                                        ultricies.</h3>
                                    <div className="flex flex-wrap items-center">
                                        <p className="mb-6 md:mb-0 text-white">TIA O’Halleran, NYC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-full lg:max-w-md px-3 lg:mt-20 mb-6 lg:mb-0">
                        <div className="px-8 py-16 bg-blue-300">
                            <div className="relative px-4 mx-auto">
                                <div className="px-4 md:px-10">
                                    <h3 className="mb-8 text-xl font-bold font-heading text-white">This time ut augue ut
                                        magna rutrum ultricies nec nec leo. Proin tempor, mauris sad senne lorem.</h3>
                                    <div className="flex flex-wrap items-center">
                                        <p className="mb-6 md:mb-0 text-white">Lea Diamse, NYC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block opacity-50 flex-shrink-0 w-full max-w-md px-3">
                        <div className="px-8 py-16 border border-white">
                            <div className="relative px-4 mx-auto">
                                <div className="px-4 md:px-10">
                                    <h3 className="mb-8 text-xl font-bold font-heading text-white">Thanks, feugiat
                                        tellus a sad tincidunt ultrices. Phasellus non libero tempus odio vestibulum
                                        ultricies.</h3>
                                    <div className="flex flex-wrap items-center">
                                        <p className="mb-6 md:mb-0 text-gray-300">TIA O’Halleran, NYC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;
