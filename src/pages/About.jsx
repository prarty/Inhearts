import React from "react";

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">At Inhearts Event Planner, we are your premier destination for all your event management needs. Whether it's the elegance of weddings, the joy of engagements, the professionalism of corporate events, the excitement of sports events, or the grandeur of Big Bash parties, we excel in creating unforgettable experiences. Our dedicated team combines creativity, precision, and passion to craft each event with meticulous attention to detail. Experience excellence with Oness Events and make your special occasions truly extraordinary.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-[600px]" src="/assets/Team%20work.gif" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Meet Our Team</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Ravi and Pratibha are the dynamic duo behind Inhearts Event Planner. Ravi, our head event coordinator and stylist, transforms ideas into reality with finesse, ensuring every event is seamless and spectacular. Pratibha, a passionate event designer, brings creativity and authenticity to every celebration, crafting unique experiences that leave lasting impressions. Together, they lead our team in creating unforgettable moments and exceeding expectations.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="/assets/team/Ravi.png" alt="Ravi featured Img"/>
                            <img className="md:hidden block" src="/assets/team/Ravi.png" alt="Ravi featured Img"/>
                            <p className="font-medium text-lg leading-5 text-gray-800 mt-4">Ravi Pandey</p>
                            <p className="font-medium text-sm leading-5 text-gray-800">CEO</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="/assets/team/Pratibha.png"
                                 alt="Pratibha featured Img"/>
                            <img className="md:hidden block" src="/assets/team/Pratibha.png"
                                 alt="Pratibha featured Img"/>
                            <p className="font-medium text-lg leading-5 text-gray-800 mt-4">Pratibha Tiwari</p>
                            <p className="font-medium text-sm leading-5 text-gray-800">Creative Head</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
