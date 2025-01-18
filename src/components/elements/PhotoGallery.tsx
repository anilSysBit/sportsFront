import React, { useState } from "react";

interface GalleryType{
    contentApi:any;
}
const PhotoGallery: React.FC<GalleryType> = ({contentApi}) => {
//   const [arrLength, setArrLength] = useState(20);
//   const contentApi = Array.from({ length: arrLength }, (_, i) => i + 1);

//   const getRandomNumber = (min: number, max: number): number => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

  return (
    <div className="photo-gallery">
      {[1, 2, 3].map(() => (
        <div className="column">
          {contentApi && contentApi.map((elem, index) => {
            // const randomX = getRandomNumber(200, 300);
            // const randomY = getRandomNumber(250, 400);
            return (
              <div className="photo" key={index}>
                <img
                //   src={`https://picsum.photos/${randomX}/${randomY}`}
                    src={elem?.logo}
                  alt={`image${index}`}
                />
              </div>
            );
          })}
        </div>
      ))}
      {/* <button
        style={{ marginTop: "20px" }}
        onClick={() => setArrLength(arrLength + 5)}
      >
        Show More...
      </button> */}
    </div>
  );
};

export default PhotoGallery;
