//import { createContext } from "react";

//const images = import.meta.glob("../../Images/BookCovers/*")
// const images = require.context('../../Images/BookCovers/', true);
// const imageList = images.keys().map(image => images(image));

// let ImagesContext = createContext(imageList);
// export { ImagesContext };

// Function to import all images from a directory
// const importAll = (requireContext) => {
//     return requireContext.keys().map(requireContext);
// };
  
//   // Import all images from the 'src/assets/images' directory
// const images = importAll(require.context("../../Images/BookCovers/", false, /\.(png|jpe?g|svg)$/));

// let ImagesContext = createContext(images);
// export { ImagesContext };

/*import React, { createContext, useContext } from 'react';

const images = require.context("../../Images/BookCovers", false, /\.(png|jpe?g|svg)$/);

const ImagesCoverContext = createContext();

export const ImageProvider = ({ children }) => {
  const imagePaths = images.keys().map((key) => ({
    src: images(key).default,
    name: key.replace('./', ''),
  }));

  return (
    <ImageContext.Provider value={imagePaths}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => useContext(ImagesCoverContext);*/

import Image1 from "../../Images/BookCovers/aniestla-3Hsqx6BaQjQ-unsplash.jpg";
import Image2 from "../../Images/BookCovers/artiom-vallat-aCSHSJCcrc8-unsplash.jpg";
import Image3 from "../../Images/BookCovers/florencia-viadana-bXUTGOOOr50-unsplash.jpg";
import Image4 from "../../Images/BookCovers/josh-felise-yIMy3ERBc3o-unsplash.jpg"
import Image5 from "../../Images/BookCovers/karly-jones-dpzBXwiMAtQ-unsplash.jpg";
import Image6 from "../../Images/BookCovers/madalyn-cox-O7ygzpAL4Mc-unsplash.jpg";
import Image7 from "../../Images/BookCovers/paolo-chiabrando-9dXSoi6VXEA-unsplash.jpg";
import Image8 from "../../Images/BookCovers/tim-alex-1i-P178kxHQ-unsplash.jpg";
import Image9 from "../../Images/BookCovers/tim-alex-xG5VJW-7Bio-unsplash.jpg";
import Image10 from "../../Images/BookCovers/karen-zhao-urwKmanXNTk-unsplash.jpg";



const imagesCoverList = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10]
  
const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imagesCoverList.length);
    return imagesCoverList[randomIndex];
  };
  
  export default getRandomImage;