import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
//import Contact from './Components/Contact';
//import Testimonials from './Components/Testimonials';
//import Portfolio from './Components/Portfolio';

function App(props) {

  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then(res => res.json())
      .then(result => setResumeData(result))
      .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <Header data={resumeData.main}/>
      <About data={resumeData.main}/>
      <Resume data={resumeData.resume}/>
    {/* <Portfolio data={this.state.resumeData.portfolio}/> 
      <Testimonials data={this.state.resumeData.testimonials}/>
      <Contact data={this.state.resumeData.main}/>
    */}
      <Footer data={resumeData.main}/>
    </div>
  );
}

export default App;
