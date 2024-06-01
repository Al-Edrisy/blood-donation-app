// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DonorForm from './components/DonorForm';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [donors, setDonors] = useState([]);

  const addDonor = (donor) => {
    setDonors([...donors, donor]);
  };

  return (
    <Router>
      <Header />
      <div style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route key="home" exact path="/" element={<HomePage />} />
          <Route key="about" path="/about" element={<AboutPage />} />
          <Route key="contact" path="/contact" element={<ContactPage />} />
          <Route key="donate" path="/donate" element={<DonorForm onSubmit={addDonor} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
