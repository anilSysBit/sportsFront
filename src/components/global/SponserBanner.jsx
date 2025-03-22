import React from 'react';

const SponserBanner = () => {
  const associates = [
    {
      name: "Apple",
      description: "Technology company known for its iPhones, iPads, and MacBooks.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Google",
      description: "A leading tech company specializing in search engines, advertising, and cloud computing.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      description: "A multinational technology corporation producing software, hardware, and cloud services.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
  ];

  return (
    <div className="sponser_banner">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scroll-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          width: 100%;
        }

        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
      <div className="scroll-container">
        <div className="after_marquee animate-scroll">
          {[...Array(2)].map((_, loopIndex) => (
            <React.Fragment key={loopIndex}>
              <div className="box1 box">
                <p className='header'>Title Sponser</p>
                <div className="img_box">
                  <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-tata-logo.svg" alt="" />
                </div>
              </div>

              <div className="box2 box">
                <p className="header">Associate Partners</p>
                <div className="img_box flex">
                  {associates.map((elem, index) => (
                    <img key={index} src={elem?.logo || `https://picsum.photos/100/100?random=${index}`} />
                  ))}
                </div>
              </div>

              <div className="box1 box">
                <p className='header'>Strategic Partners</p>
                <div className="img_box">
                  <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-ceat-logo.svg" alt="" />
                </div>
              </div>

              <div className="box2 box">
                <p className="header">Digital Partners</p>
                <div className="img_box flex">
                  {[1,2,3].map((elem, index) => (
                    <img key={index} src={`https://picsum.photos/100/100?random=${index}`} />
                  ))}
                </div>
              </div>

              <div className="box2 box">
                <p className="header">Service Partners</p>
                <div className="img_box flex">
                  {[5,6,7].map((elem, index) => (
                    <img key={index} src={`https://picsum.photos/100/100?random=${elem}`} />
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponserBanner;
