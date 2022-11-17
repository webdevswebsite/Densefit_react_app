import React, {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import FaqBody from "./components/FaqBody";

function Faq(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      document.title ="Vintagewine - Faq"
    return (
        <>
         <SubpageBanner name="FAQ" indexpage="Home" indexvisit="/" activepage="FAQ" />
         <section className="total-body sub-pages pt-5 d-block">
            <FaqBody/>
         </section>
         
        </>
    );
}
export default Faq;