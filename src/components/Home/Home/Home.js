import React from 'react';
import Blog from '../../Blog/Blog';
import Contact from '../../Contact/Contact';
import Breakfast from '../../Foods/Breakfast';
import Foods from '../../Foods/Foods';
import Forms from '../../Forms/Forms';
import Counter from '../Counter/Counter';
import HomeAbout from '../HomeAbout/HomeAbout';
import Slider from '../Slider/Slider';
import SpeacialArea from '../SpeacialArea/SpeacialArea';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Counter/>
            <SpeacialArea/>
            <HomeAbout/>
            <Blog/>
            <Contact/>
            {/* <Forms/> */}
        </div>
    );
};

export default Home;