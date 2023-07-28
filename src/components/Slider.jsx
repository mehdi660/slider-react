import { useState } from 'react';
import React from 'react';
import leftChevron from "../assets/left-arrow.svg"
import rightChevron from "../assets/right-arrow.svg"
import "../style/Slider.css"
import sliderData from "../data/sliderData"

const slider = () => {
    const [sliderIndex , setsliderIndex] = useState(1)
    return (
        <>
            <p className="index-info">{sliderIndex} / {sliderData.length}</p>
            <div className="slider">
                <p className="image-info">Bedroom</p>
                <img src="/images/img-3.jpg" alt="image" className="slider-img" />
                <button className="navigation-button prev-button"><img src={leftChevron} alt="previous image" /></button>
                <button className="navigation-button next-button"><img src={rightChevron} alt="next image" /></button>
            </div>
        </>
    );
};

export default slider;