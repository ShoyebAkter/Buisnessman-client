import React from 'react';
import Banner from './Banner';
import BookFood from './BookFood';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import Services from './Services';
import Testomonial from './Testomonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <BookFood></BookFood>
            <Testomonial></Testomonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;