import React, {useEffect} from "react";
import Banner from "./components/Banner";
import OfferHome from "./components/OfferHome";
import BestsellingHome from "./components/BestsellingHome";
import Whychoose from "./components/Whychoose";


function Home(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      document.title ="Vwine - Home"
    return (
        <div>
           <Banner/>
           <section className="total-body pt-5 d-block">
               <OfferHome/>
               <BestsellingHome/>
                <Whychoose/>
           </section>
        </div>
    );
}
export default Home;