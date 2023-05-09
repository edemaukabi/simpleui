import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Partners } from './components/Partners';
import { Features } from './components/Features';
import { FooterSection } from './components/FooterSection';
import { partnerCompanies, featuresData } from './assets/data';

function App() {
  return (
    <div className="ui-app">
      <div className="ui-header-section">
      <Header />
      <HeroSection />
      </div>
      <Partners partners={partnerCompanies}/>
      <Features features={featuresData}/>
      <FooterSection />
    </div>
  );
}

export default App;
