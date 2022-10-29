import React from 'react';
import Forms from '../../Forms/Forms';
import HomeAbout from '../HomeAbout/HomeAbout';
import Slider from '../Slider/Slider';
import SpeacialArea from '../SpeacialArea/SpeacialArea';

const Home = () => {
    return (
        <div>
            <Slider/>
            <HomeAbout/>
            <SpeacialArea/>
            <Forms/>
        </div>
    );
};

export default Home;