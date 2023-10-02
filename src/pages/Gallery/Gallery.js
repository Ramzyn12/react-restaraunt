import React from "react";
import CollageGallery from "../../components/CollageGallery/CollageGallery";
import { Helmet } from "react-helmet";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gangnam Stevenage - Gallery</title>
        <meta
          name="description"
          content="Gallery of our authentic korean food and inside"
        />
      </Helmet>
      <CollageGallery />
    </>
  );
};

export default Gallery;
