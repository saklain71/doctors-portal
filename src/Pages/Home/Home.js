import React from 'react';
import Info from '../Info/Info';
import Banner from './Banner';
import MakeAppointment from './MakeAppointment';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;