import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from './About/About';
import LeadForm from './LeadForm/LeadForm';
import Service from './Service/Service';
import Sponsor from './Sponsor/Sponsor';
import Team from './Team/Team';

const Home = () => {
    return (
        <div id="home-container">
            <Header></Header>
            <Sponsor></Sponsor>
            <Service></Service>
            <About></About>
            <Team></Team>
            <LeadForm></LeadForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;