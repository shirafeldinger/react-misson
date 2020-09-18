import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import data from "./data/imgs.json";
import Text from "./components/Text/Text";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Gallery images={data.images} />
      <h2 className="content">Content</h2>
      <Text />
      <Footer />
    </>
  );
}

export default App;
