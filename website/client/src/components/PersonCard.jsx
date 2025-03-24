import React from 'react'
import 'animate.css';
import useSlideInOnVisible from './Slide';

// Lazy load images
const LazyImage = ({ src, alt, className }) => (
    <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
    />
);

const PersonCard = ({ ImageUrl, Name, Position }) => {
    useSlideInOnVisible()
    return (
        <div className="opacity-0 element-to-animate flex flex-col items-center overflow-hidden m-0" alt="Card">
            <div className="flex flex-col items-center min-w-[300px] min-h-[400px]">
                <LazyImage
                    src={ImageUrl}
                    draggable="false"
                    className="w-[300px] h-[300px] mb-2 rounded-full object-cover"
                    alt={Name}
                />
                <p className="font-bold"> {Name} </p>
                <p className="text-center"> {Position} </p>
            </div>
        </div>
    );
};

export default PersonCard;