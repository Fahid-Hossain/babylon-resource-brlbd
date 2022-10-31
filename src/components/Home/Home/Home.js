import React from 'react';
import AbouHome from '../../About/AbouHome';
import Contact from '../../Contact/Contact';
import ContactBanner from '../../ContactBanner/ContactBanner';
import PortfolioHome from '../../Portfolio/PortfolioHome';
import Pricing from '../../Pricing/Pricing';
import ServicesHome from '../../Services/ServicesHome';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';

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