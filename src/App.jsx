import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Works, PersonalProjects, ResearchProjects, Courses } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more pages here */}
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const HomePage = () => (
  <div>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
    </div>
    <div>
      <Hero />
      {/* <StarsCanvas /> */}
      <About />
      {/* <Experience /> */}
      <Works />
      {/* <ResearchProjects /> */}
      <PersonalProjects />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  </div>
);

export default App;
