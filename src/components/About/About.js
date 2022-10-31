import React from 'react';
import Counter from '../Home/Counter/Counter';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import SpeacialArea from '../Home/SpeacialArea/SpeacialArea';
import AbouHome from './AbouHome';
import AboutHeader from './AboutHeader';

const About = () => {
    return (
        <div>
            {/* <HomeAbout/> */}
            <AboutHeader/>
            <AbouHome/>
            <Counter/>
            <SpeacialArea/>
        </div>
    );
};

export default About;