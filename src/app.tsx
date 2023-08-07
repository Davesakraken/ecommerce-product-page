import { useState } from "react";
// components
import ItemListing from "@/components/itemListing/itemListing";
import LightBox from "@/components/lightbox";
import NavBar from "@/components/navBar/navbar";
import Attribution from "@/components/attribution";
// ContextProviders
import QuantityProvider from "@/hooks/quantityContext";
import CartProvider from "@/hooks/cartContext";

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
