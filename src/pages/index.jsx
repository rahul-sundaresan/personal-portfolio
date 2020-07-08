import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact';
import resumeData from '../../resumeData.json'
import Navbar from "../components/Navbar/Navbar";
import YAMLData from "../../content/resume-data.yaml"

export default function App() {
    return (
        <>
            <Navbar/>
            <Header name={YAMLData.name} tagline={YAMLData.tagline} personalInfo={YAMLData.personalinfo}/>
            <Resume work={YAMLData.experience} skills={YAMLData.skills} education={YAMLData.education}/>
            <Contact/>
            <Footer data={resumeData.main}/>
        </>
    );
}
