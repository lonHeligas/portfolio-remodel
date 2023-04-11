import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route, Router, Switch } from "react-router-dom";
import { Header, Wrapper, Footer } from './components';
import { IntroPage, PortfolioPage, ResumePage, ContactPage } from './pages';

function App() {
  return (
    <Wrapper>
      <HashRouter basename="/" hashType="slash">
        <Routes>
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/" element={<IntroPage />} />
        </Routes>
      </HashRouter>
    </Wrapper>
  );
}

export default App;
