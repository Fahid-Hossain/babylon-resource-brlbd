import React from 'react';
import AbouHome from '../../About/AbouHome';
import BlogHome from '../../Blog/BlogHome';
import Clients from '../../Clients/Clients';
import Contact from '../../Contact/Contact';
import ContactBanner from '../../ContactBanner/ContactBanner';
import Feedback from '../../Feedback/Feedback';
import PortfolioHome from '../../Portfolio/PortfolioHome';
import Pricing from '../../Pricing/Pricing';
import ServicesHome from '../../Services/ServicesHome';
import Training from '../../Training/Training';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import HomeAbout from '../HomeAbout/HomeAbout';
import Slider from '../Slider/Slider';
import SpeacialArea from '../SpeacialArea/SpeacialArea';

const Home = () => {
    return (
        <div>
            
            {/* <Slider/> */}
            <Banner/>
            <Counter/>
            {/* <HomeAbout/> */}
            <AbouHome/>
            <PortfolioHome/>
            <ContactBanner/>
            <ServicesHome/>
            {/* <BlogHome/> */}
            {/* <Training/> */}
            <Pricing/>
            {/* <SpeacialArea/> */}

            <Contact/>
        </div>
    );
};

export default Home;