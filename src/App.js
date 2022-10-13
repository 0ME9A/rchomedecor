import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Error from './components/Error';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  


  return (
    <div className="App">
      <Nav/>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/terms_conditions" element={<TermsConditions />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
