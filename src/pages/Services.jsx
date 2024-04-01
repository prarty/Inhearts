import React from 'react'

export default function Services() {
    return (
        <div className={"relative m-5 pt-16"}>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 px-2 md:px-4 m-10">
                    <h1 className="text-lg md:text-2xl font-bold">Wedding Event</h1>
                    <p className="text-sm md:text-lg">Step into a realm of everlasting love and joyous celebration with our tailored wedding events, featuring vibrant Haldi and intricate Mehndi ceremonies.
                        From captivating decorations to personalized details, we specialize in creating memorable moments that reflect the beauty of your unique love story.
                        Let us infuse every aspect of your wedding journey with the enchantment of love.</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/assets/services/wedding.png" alt="wedding" className="w-full h-auto"
                         style={{maxWidth: "308px", maxHeight: "406px"}}/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/assets/services/engagement.png" alt="engagement" className="w-full h-auto"
                         style={{maxWidth: "308px", maxHeight: "406px"}}/>
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-4 m-10">
                    <h1 className="text-lg md:text-2xl font-bold">Engagement Event</h1>
                    <p className="text-sm md:text-lg">Embark on a journey of love and celebration with our expertly crafted engagement events.
                        From romantic settings to personalized touches, we specialize in creating memorable moments that capture the essence of your love story.
                        Let us make your engagement event a cherished milestone in your journey together.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 px-2 md:px-4 m-10">
                    <h1 className="text-lg md:text-2xl font-bold">Corporate Event</h1>
                    <p className="text-sm md:text-lg">Experience the epitome of corporate sophistication with our expert event planning services.
                        From thoughtfully designed themes to flawless execution, we specialize in crafting corporate events that resonate with professionalism and style.
                        Trust us to transform your next corporate gathering into an unforgettable success.</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/assets/services/corporate.jpeg" alt="corporate" className="w-full h-auto"
                         style={{maxWidth: "508px", maxHeight: "606px"}}/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/assets/services/sport.jpeg" alt="sports" className="w-full h-auto"
                         style={{maxWidth: "508px", maxHeight: "606px"}}/>
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-4 m-10">
                    <h1 className="text-lg md:text-2xl font-bold">Sports Event</h1>
                    <p className="text-sm md:text-lg">Join us for an electrifying sports event like no other!<br></br> As seasoned event planners,
                        we excel in creating immersive experiences that capture the thrill and excitement of sports.
                        From innovative concepts to flawless execution, let us elevate your sports event to new heights!</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 px-2 md:px-4 m-10">
                    <h1 className="text-lg md:text-2xl font-bold">Big Bash Party</h1>
                    <p className="text-sm md:text-lg">Experience the ultimate Big Bash Party with us!<br></br> As expert event planners, we bring creative ideas to life,
                        ensuring an unforgettable night filled with excitement, entertainment, and unforgettable memories.
                        Let us make your Big Bash Party the talk of the town!.</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/assets/services/party.jpeg" alt="party" className="w-full h-auto"
                         style={{maxWidth: "508px", maxHeight: "606px"}}/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/assets/services/culture.png" alt="cultural" className="w-full h-auto"
                         style={{maxWidth: "308px", maxHeight: "406px"}}/>
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-4 m-10">
                    <h1 className="text-lg md:text-2xl font-bold">Cultural Event</h1>
                    <p className="text-sm md:text-lg">Immerse yourself in the beauty of cultural diversity with our meticulously planned cultural events. From captivating performances to interactive experiences, we specialize in crafting unforgettable moments that celebrate heritage and unity.
                        Let us bring the richness of diverse cultures to life, making your cultural event a vibrant and memorable celebration of unity.</p>
                </div>
            </div>
        </div>
    )
}
