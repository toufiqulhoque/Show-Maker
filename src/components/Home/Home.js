import React from 'react';
import Bannar from '../Bannar/Bannar';
import Bannar2 from '../Bannar2/Bannar2';
import MobileApp from '../MobileApp/MobileApp';
import Discover from '../Pages/Discover';
import HomeCard from './HomeCard/HomeCard';



const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <HomeCard></HomeCard>
            <MobileApp></MobileApp>


        </div>
    );
};

export default Home;