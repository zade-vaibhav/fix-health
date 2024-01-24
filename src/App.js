
import './App.css';
import Download from './Components/DownloadSection/Download';
import Faq from './Components/Faq/Faq';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';
import Process from './Components/Process/Process';
import Quote from './Components/Quote/Quote';
import DocterCarousel from './Components/docterCarousel/DocterCarousel';

function App() {
  return (
    <div className="App">
      <Quote/>
      <Navbar/>
      <HeroSection/>
      <DocterCarousel/>
      <Process/>
      <Download/>
      <Faq/>
    </div>
  );
}

export default App;
