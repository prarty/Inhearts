import React from 'react';
import PropTypes from 'prop-types';

const LocationCard = ({ image, text }) => {
    return (
        <div
            className="relative w-110 h-[400px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 m-10">
            <div
                className="absolute inset-0 flex items-center justify-center bg-gray-100
                 bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <p className="text-xl font-semibold text-center m-5">{text}</p>
            </div>
            <img
                src={image}
                alt="Location"
                className="w-full h-full object-cover"
            />
        </div>

    );
};

LocationCard.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default LocationCard;
