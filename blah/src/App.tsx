import React, { useState, useEffect } from 'react';
import './App.css'; // Import your custom styles
import teamData from './CollegeBasketballTeams.json';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1 className="app-heading">Colleges in NCAA Basketball</h1>;
}

const Band: React.FC<Team> = ({ school, name, city, state }) => {
  return (
    <div className="team-card">
      <h2 className="team-name">{school}</h2>
      <h3 className="team-mascot">{name}</h3>
      <p className="team-location">
        {city}, {state}
      </p>
    </div>
  );
};

const TeamList: React.FC = () => {
  return (
    <div className="team-list">
      {teamData.teams.map((team, index) => (
        <Band key={index} {...team} />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    // Set teams directly from the imported JSON data
    setTeams(teamData.teams);
  }, []);

  return (
    <div className="app-container">
      <Welcome />
      <TeamList />
    </div>
  );
};

export default App;
