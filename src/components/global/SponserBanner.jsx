import React from 'react'

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
        <div className="box1 box">
            <p className='header'>Title Sponser</p>
            <div className="img_box">
                <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-tata-logo.svg" alt="" />
            </div>
        </div>

        <div className="box2 box">
            <p className="header">Associate Partners</p>
            <div className="img_box flex">
                {associates.map((elem,index)=>{
                    return(
                        <img src={elem?.logo || `https://picsum.photos/100/100?random=${index}`} />
                    )
                })}
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
                {[1,2,3].map((elem,index)=>{
                    return(
                        <img src={`https://picsum.photos/100/100?random=${index}`} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SponserBanner