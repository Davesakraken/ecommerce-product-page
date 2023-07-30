import ItemListing from "@/components/itemListing/itemListing";
import LightBox from "@/components/lightbox/lightbox";
import NavBar from "@/components/navBar/navbar";
import { useState } from "react";
import Attribution from "@/components/attribution";

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
      <NavBar />
      <ItemListing openLightbox={openLightbox} />
      {close && <LightBox closeLightbox={closeLightbox} />}
      <Attribution />
    </>
  );
}

export default App;
