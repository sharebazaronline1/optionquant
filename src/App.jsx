import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { LifetimeCTA } from "./components/LifetimeCTA";
import { HowToTrade } from "./components/HowToTrade";
import { Markets } from "./components/Markets";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
useEffect(() => {
  setLandingPageData(JsonData);

  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
  }
}, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
        <Markets />
     
     <HowToTrade />
      <LifetimeCTA />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
