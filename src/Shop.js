import React, { useEffect } from "react";
import SubpageBanner from "./components/SubpageBanner";
import ShopPageBody from "./components/ShopPageBody";

function Shop() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    document.title = "Vintagewine - Shop"
    return (
        <>
            <SubpageBanner name="Shop" indexpage="Home" indexvisit="/" activepage="Shop" />
            <ShopPageBody />
        </>
    );
}
export default Shop;