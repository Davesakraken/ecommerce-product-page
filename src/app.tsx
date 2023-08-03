import ItemListing from "@/components/itemListing/itemListing";
import LightBox from "@/components/lightbox/lightbox";
import NavBar from "@/components/navBar/navbar";
import { useState } from "react";
import Attribution from "@/components/attribution";
import QuantityProvider from "@/context/quantityContext";
import CartProvider from "@/context/cartContext";

function App() {
  const [close, setClose] = useState(false);

  const closeLightbox = () => {
    setClose(!close);
  };

  const openLightbox = () => {
    setClose(true);
  };

  return (
    <>
      <CartProvider>
        <QuantityProvider>
          <NavBar />
          <ItemListing openLightbox={openLightbox} />
          <>{close ? <LightBox closeLightbox={closeLightbox} /> : null}</>
          <Attribution />
        </QuantityProvider>
      </CartProvider>
    </>
  );
}

export default App;
