import React, { Component } from 'react';
import HomeTeam from './HomeTeam';
import VisitorTeam from './VisitorTeam';
import MatchInfo from './MatchInfo';
import './Styles/PlacarContainer.css';

class PlacarContainer extends Component {
  render() { 
    return (
      <div className="Placar">
        <h1 className="Championship">CAMPEONATO BRASILEIRO</h1>
        <div className="Match">
          <MatchInfo />
        </div>
        <div className="Confrontation">
          <div className="TeamA">
            <HomeTeam />
          </div>
          <div>
            <h3 className="Versus">VS</h3>
          </div>
          <div className="TeamB">
            <VisitorTeam />
          </div>
        </div>  
      </div>
    );
  }
}
 
export default PlacarContainer;
