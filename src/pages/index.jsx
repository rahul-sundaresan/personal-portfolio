import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact';
import resumeData from '../../resumeData.json'
import Navbar from "../components/Navbar/Navbar";
import YAMLData from "../../content/resume-data.yaml"
//import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';

export default function App() {
    return (
        <>
            <Navbar/>
            <Header name={YAMLData.name} tagline={YAMLData.tagline} personalInfo={YAMLData.personalinfo}/>
            <Resume work={YAMLData.experience} skills={YAMLData.skills} education={YAMLData.education}/>
            {/* <Portfolio data={this.state.resumeData.portfolio}/>
              <Testimonials data={this.state.resumeData.testimonials}/>

            */}
            <Contact/>
            <Footer data={resumeData.main}/>
        </>
    );
}
