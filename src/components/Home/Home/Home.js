import React from 'react';
import Counter from '../Counter/Counter';
import HomeAbout from '../HomeAbout/HomeAbout';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Counter/>
            <HomeAbout/>
            <Counter/>
            <HomeAbout/>
        </div>
    );
};

export default Home;