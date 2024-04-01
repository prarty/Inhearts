import React from 'react';
import LocationCard from './LocationCard';

const Location = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <LocationCard
                image="/assets/presence/varanasi.png"
                text="Discover the allure of Varanasi with our premium event planning services that bring this mystical city to life.
                 From organizing sacred ceremonies along the Ganges to crafting culturally rich celebrations, our expertise ensures every
                 event in Varanasi is a seamless and unforgettable experience.
                 Come to us and let's create magical moments together in the spiritual heart of India."
            />
            <LocationCard
                image="/assets/presence/mumbai.png"
                text="Experience the dynamic energy of Mumbai with our premium event planning services that bring this bustling metropolis to life.
                 From glamorous parties in iconic venues to corporate gatherings in cutting-edge spaces, our expertise
                  ensures every event in Mumbai is a seamless and unforgettable experience.
                Join us as we craft extraordinary moments together in the vibrant heart of India."
            />
            <LocationCard
                image="/assets/presence/pune.png"
                text="Experience the cultural charm of Pune with our premium event planning services that bring this vibrant city to life.
                 From traditional celebrations in historic venues to modern events in sophisticated settings,
                  our expertise ensures every event in Pune is a seamless and unforgettable experience.
                Join us as we craft extraordinary moments together in this cultural hub of India."
            />
            <LocationCard
                image="/assets/presence/Lonavala.png"
                text="Experience the serene beauty of Lonavala with our premium event planning services that transform this picturesque
                 destination into the perfect setting for your special occasions. From intimate gatherings amidst lush landscapes to grand
                  celebrations in luxurious venues, our expertise ensures every event in Lonavala is a harmonious blend of nature and elegance.
                 Join us as we create unforgettable moments in this tranquil paradise."
            />

        </div>
    );
};

export default Location;
