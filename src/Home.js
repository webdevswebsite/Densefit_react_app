import React, { useEffect } from "react";
import Banner from "./components/Banner";
import OfferHome from "./components/OfferHome";
import BestsellingHome from "./components/BestsellingHome";
import Whychoose from "./components/Whychoose";
import Footer from "./Footer";


function Home() {
   
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    document.title = "Vwine - Home"
    return (
        <>
            <div>
                <Banner />
                <section className="total-body pt-5 d-block">
                    <OfferHome />
                    {/* <SingleProduct /> */}
                    <BestsellingHome />
                    <Whychoose />
                    <Footer />
                </section>
            </div>
        </>
    );
}
export default Home;