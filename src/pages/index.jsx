import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import resumeData from '../../resumeData.json'
//import Testimonials from '../components/Testimonials';
//import Portfolio from '../components/Portfolio';

export default function App(props) {

  

    return (
        <>
            <Header data={resumeData.main}/>
            <About data={resumeData.main}/>
            <Resume data={resumeData.resume}/>
            {/* <Portfolio data={this.state.resumeData.portfolio}/>
              <Testimonials data={this.state.resumeData.testimonials}/>

            */}
            <Contact/>
            <Footer data={resumeData.main}/>
        </>
    );
}
