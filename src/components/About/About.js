import React from 'react';
import Counter from '../Home/Counter/Counter';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import SpeacialArea from '../Home/SpeacialArea/SpeacialArea';

const About = () => {
    return (
        <div>
            <HomeAbout/>
            <Counter/>
            <SpeacialArea/>
        </div>
    );
};

export default About;