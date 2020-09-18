import React from "react";
import "./GalleryStyle.css";

export default function Gallery({ images }) {
  return (
    <div className="gallery-div">
      {images.map((img) => {
        return (
          <img className="gallery-img" key={img.url} src={img.url} alt="img" />
        );
      })}
    </div>
  );
}
