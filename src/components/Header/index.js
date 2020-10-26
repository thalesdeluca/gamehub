import React from 'react'
import "./styles.scss";

const Header = ({ score, scoreless = false, titles = [] }) => {


  return (
    <div id="header" className="header">
      <div className="title-container">
        {titles?.map((title) => (
          <span className="title">{title}</span>
        ))}
      </div>

      {!scoreless && (
        <div className="score-container">
          <span className="score-header">SCORE</span>
          <span id="score" className="score">{score}</span>
        </div>
      )}
    </div>
  )
}

export { Header }
