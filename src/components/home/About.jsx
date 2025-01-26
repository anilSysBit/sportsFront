import React from "react";

const About = () => {
  return (
    <div className="about_page">
      <div className="about_container">
        <div className="heading">
          <p className="bold_span">ABOUT US</p>
          <h1>GAME PLAN NEPAL</h1>

          <div className="achievement">
            <h2>
              ORGANIZED MORE THAN <span className="big_primary">10+</span>{" "}
              FOOTBALL EVENTS OVERALL NEPAL
            </h2>
          </div>
        </div>
        <div className="other_info">
          <p>
          Game Plan Nepal is dedicated to revolutionizing the way sports data is managed and presented in Nepal. Specializing in football events, we provide a platform that offers in-depth match statistics, live updates, and dynamic dashboards. Our goal is to make sports data more accessible, accurate, and engaging for fans, teams, and organizers alike. Through our platform, visitors can explore detailed tournament insights, track player performances, view match schedules, and stay updated on standings. Whether you are a football enthusiast, a team member, or an event organizer, Nepal Sports Organization ensures you have the tools and information you need to stay connected with the sport. Join us in transforming the sports experience and stay informed with the latest updates from the world of football.

          </p>
          {/* <p className="bold_span read">Read More . . . </p> */}

          <div className="sponsors">
            <img
              src="https://remarketing.pt/wp-content/uploads/2020/05/white_logo_transparent_background.png"
              alt="Sponsor 1"
            />
            <img
              src="https://www.pngall.com/wp-content/uploads/2018/05/Disney-Logo-PNG-File.png"
              alt="Sponsor 2"
            />
            <img
              src="https://i.pinimg.com/originals/f2/87/12/f287122744d914997e7e2b690b1f6706.png"
              alt="Sponsor 3"
            />
            <img
              src="https://nplpickleball.store/cdn/shop/files/NPL_Logo_3.png?v=1687990309&width=1445"
              alt="Sponsor 4"
            />
            <img
              src="https://www.pngmart.com/files/22/FIFA-Logo-PNG-Isolated-Image.png"
              alt="Sponsor 5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
