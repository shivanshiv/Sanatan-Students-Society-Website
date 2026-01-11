import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Calendar from './components/Calendar/Calendar';
import HiringExecutiveMembers from './components/ExecutiveApplications/HiringExecutiveMembers'
import PreviousEvents from './components/PastEvents/PreviousEvents';
import VolunteeringOpportunities from './components/VolunteeringOpportunities/VolunteeringOpportunities';
import Bursary from './components/Bursary/Bursary';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path='/hiring' element={<HiringExecutiveMembers/>} />
          <Route path='/pastevents' element={<PreviousEvents/>} />
          <Route path='/volunteering' element={<VolunteeringOpportunities/>} />
          <Route path='/bursary' element={<Bursary/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
