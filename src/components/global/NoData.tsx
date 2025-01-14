import React from 'react';
// import imageSr from '/images/nodataavatar.png';
interface NoDataProps {
  title?: string;
  message?: string;
}

const imageSrc = '/images/nodataavatar.png';

const NoData: React.FC<NoDataProps> = ({
  title = "Data Not Found",
  message = "No Data adsf asdfasdf",
}) => {
  return (
    <div className="no_data_container">
      <h2>{title}</h2>
      <p>{message}</p>
      <div className="img_box">
        <img src={imageSrc} alt="GPN gpn sports nepal game plan no banner image" />
      </div>
      <a href="">
        <button className="global_btn">Refresh Page</button>
      </a>
    </div>
  );
};

export default NoData;
