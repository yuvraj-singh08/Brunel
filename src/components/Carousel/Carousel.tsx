import React, { useState, ReactNode, useEffect } from "react";
import "./style.css";

interface CarouselProps {
    children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        let intervalId = setInterval(() => {
            console.log("Sliding");
            setSlide(prevSlide => (prevSlide + 1) % React.Children.count(children));
        }, 5000); // Adjust interval timing as needed
    
        return () => {
            clearInterval(intervalId)
        };
    }, []);
    

    const nextSlide = () => {
        setSlide((slide + 1) % React.Children.count(children));
    };

    const prevSlide = () => {
        setSlide((slide - 1 + React.Children.count(children)) % React.Children.count(children));
    };

    return (
        <div className="relative flex items-center justify-center w-96 h-72">
            {React.Children.map(children, (child, idx) => {
                const slideClasses = idx === slide ? "leading-tight text-4xl rounded-md w-full h-full" : "hidden";
                return (
                    <div key={idx} className={slideClasses}>
                        {child}
                    </div>
                );
            })}
            <span className="flex absolute bottom-10 left-0">
                {React.Children.map(children, (_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};

export default Carousel;