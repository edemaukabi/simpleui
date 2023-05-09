import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Partners } from './components/Partners';
import { partnerCompanies, featuresData } from './assets/data';
import { Features } from './components/Features';

function App() {
  return (
    <div className="ui-app">
      <div className="ui-header-section">
      <Header />
      <HeroSection />
      </div>
      <Partners partners={partnerCompanies}/>
      <Features features={featuresData}/>
    </div>
  );
}

export default App;
