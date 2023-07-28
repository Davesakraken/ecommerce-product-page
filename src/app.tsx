import ItemListing from "./components/itemListing/itemListing";
import LightBox from "./components/lightbox/lightbox";
import NavBar from "./components/navBar/navbar";
import { useState } from "react";

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
    </>
  );
}

export default App;
