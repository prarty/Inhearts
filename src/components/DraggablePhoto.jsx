import React from 'react';

const DraggablePhoto = ({ imageUrl }) => {
    return (
        <div className="w-32 h-32 bg-cover bg-center rounded-md shadow-md cursor-move" style={{ backgroundImage: `url(${imageUrl})` }} draggable="true"></div>
    );
};

export default DraggablePhoto;
