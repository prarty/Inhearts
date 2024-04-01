import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoGrid = ({photos}) => {
    return (
        <div className="relative ">
            <div className="grid grid-cols-4 p-4">
                {photos.map((photo, index) => (
                    <div key={index} className="cursor-pointer">
                        <img src={photo} alt={`Photo ${index + 1}`} className="w-[400px] h-[300px] p-3"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGrid;
