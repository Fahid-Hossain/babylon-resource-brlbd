import React from 'react';
import Counter from '../Counter/Counter';
import HomeAbout from '../HomeAbout/HomeAbout';
import Slider from '../Slider/Slider';
import SpeacialArea from '../SpeacialArea/SpeacialArea';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Counter/>
            <HomeAbout/>
            <SpeacialArea/>
        </div>
    );
};

export default Home;