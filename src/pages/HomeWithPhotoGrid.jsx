import DraggablePhoto from '../components/DraggablePhoto.jsx';

const PhotoGrid = () => {
    const photos = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        // Add more photo URLs here
    ];

    return (
        <div className="grid grid-cols-5 gap-4 p-8">
            {photos.map((photo, index) => (
                <DraggablePhoto key={index} imageUrl={photo} />
            ))}
        </div>
    );
};

export default PhotoGrid;
