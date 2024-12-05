import React, { useState } from "react";
import MatchCard from "./MatchCard";

const MatchesTable = () => {
  const [matches, setMatches] = useState([
    {
      id: 1,
      team1: { team: { name: "Team A" } },
      team2: { team: { name: "Team B" } },
      event: "Event 1",
      status: "Initiated",
      match_date: "2024-12-10",
      match_time: "14:00",
    },
    {
      id: 2,
      team1: { team: { name: "Team C" } },
      team2: { team: { name: "Team D" } },
      event: "Event 2",
      status: "Running",
      match_date: "2024-12-11",
      match_time: "16:00",
    },
    {
        id: 2,
        team1: { team: { name: "Team C" } },
        team2: { team: { name: "Team D" } },
        event: "Event 2",
        status: "Cancelled",
        match_date: "2024-12-11",
        match_time: "16:00",
      },
      {
        id: 2,
        team1: { team: { name: "Team C" } },
        team2: { team: { name: "Team D" } },
        event: "Event 2",
        status: "Running",
        match_date: "2024-12-11",
        match_time: "16:00",
      },
      {
        id: 2,
        team1: { team: { name: "Team C" } },
        team2: { team: { name: "Team D" } },
        event: "Event 2",
        status: "Running",
        match_date: "2024-12-11",
        match_time: "16:00",
      },
      {
        id: 2,
        team1: { team: { name: "Team C" } },
        team2: { team: { name: "Team D" } },
        event: "Event 2",
        status: "Running",
        match_date: "2024-12-11",
        match_time: "16:00",
      },    {
        id: 2,
        team1: { team: { name: "Team C" } },
        team2: { team: { name: "Team D" } },
        event: "Event 2",
        status: "Running",
        match_date: "2024-12-11",
        match_time: "16:00",
      },    {
        id: 2,
        team1: { team: { name: "Team C" } },
        team2: { team: { name: "Team D" } },
        event: "Event 2",
        status: "Running",
        match_date: "2024-12-11",
        match_time: "16:00",
      },
  ]);



  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Example total pages
  const handleDeleteMatch = (e) => {
    e.preventDefault();
    alert("Match deleted!");
  };

  const handleOpenAlert = (id, message, detail) => {
    if (window.confirm(`${message}\n${detail}`)) {
      setMatches((prevMatches) => prevMatches.filter((match) => match.id !== id));
    }
  };


  return (
    <div className="responsive-table-box match_listing">
      <h2 className="txt-center">Matches</h2>
      <div className="filter_box">
        {/* <a href="/create-match-admin/1">Add a new Match</a> */}
        <div className="search">
          <input type="search" placeholder="Search" />
          <button className="global_btn">Se</button>
        </div>
      </div>


      <div className="team_listing" id="team-form">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>SN</th>
              <th>Teams</th>
              <th>Event</th>
              <th>Status</th>
              <th>Match Date</th>
              <th>Match Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => (
              <tr key={match.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="table_avatar_box">
                    <div className="team team1">
                      <div className="avatar">
                        <img src={`https://picsum.photos/10${index}`} alt="" />
                      </div>
                      <p>{match.team1.team.name}</p>
                    </div>
                    <p>Vs</p>
                    <div className="team team2">
                      <div className="avatar">
                        <img src={`https://picsum.photos/10${index + 20}`} alt="" />
                      </div>
                      <p>{match.team2.team.name}</p>
                    </div>
                  </div>
                </td>
                <td>{match.event}</td>
                <td>
                  <span className={`event_status ${match.status}`}>{match.status}</span>
                </td>
                <td>{match.match_date}</td>
                <td>{match.match_time}</td>
                <td>
                  <div className="td_actions">
                    👁️
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchesTable;
