import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Partners } from './components/Partners';
import { Features } from './components/Features';
import { FooterSection } from './components/FooterSection';
import { partnerCompanies, featuresData } from './assets/data';




function App() {
  const [headerBackground, setHeaderBackground] = useState("ui-header-section")

  return (
    <div className="ui-app">
      <div className={headerBackground}>
      <Header addback={setHeaderBackground}/>
      </div>
      <HeroSection />
      <Partners partners={partnerCompanies}/>
      <Features features={featuresData}/>
      <FooterSection />
    </div>
  );
}

export default App;
