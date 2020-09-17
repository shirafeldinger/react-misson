import React from "react";
import GalleryStyle from "./GalleryStyle.css";

export default function Gallery({ images }) {
  return (
    <div id="gallery-div">
      {images.images.map((img) => {
        return (
          <img className="gallery-img" key={img.url} src={img.url} alt="img" />
        );
      })}
    </div>
  );
}
