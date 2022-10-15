import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Best interior designer in Patna | 3D Interior Designer | Home Decor Service – RC Home Decor</title>

      </Helmet>
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms_conditions" element={<TermsConditions />} />
          <Route path="privacy_policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
