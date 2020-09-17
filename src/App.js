import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import images from "./data/imgs.json";
import Content from "./components/Content/Content";
import Text from "./components/Text/Text";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery images={images} />
      <Content />
      <Text />
      <Footer />
    </div>
  );
}

export default App;
