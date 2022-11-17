import React,{useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import AboutpageSectionone from "./components/AboutpageSectionone";
import AboutpageSectiontwo from "./components/AboutpageSectiontwo";
import AboutpageSectionthree from "./components/AboutpageSectionthree";
import AboutpageSectionfour from "./components/AboutpageSectionfour";
import AboutpageSectionfive from "./components/AboutpageSectionfive";


function About(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      document.title ="Vwine - About"
    return (
        <>
          <SubpageBanner name="About Us" indexpage="Home" indexvisit="/" activepage="About Us" />
          <section className="total-body sub-pages py-5 d-block">
              <AboutpageSectionone/>
              <AboutpageSectiontwo/>
              <AboutpageSectionthree/>
              <AboutpageSectionfour/>
              <AboutpageSectionfive/>
          </section>
        </>
    );
}
export default About;