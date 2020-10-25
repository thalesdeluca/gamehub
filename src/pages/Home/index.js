import React from 'react'
import { Link } from 'react-router-dom'
import { GameButton, Button } from '../../components'
import { games } from '../../constants'
import "./styles.scss"



function HomePage() {
  return (
    <div id="home">
      <span className="title">GameHUB</span>

      <div className="game-list">
        {games.map((data) => (
          <GameButton {...data} />
        ))}
      </div>

      <Button className="btn-primary">Log In</Button>
      <Button className="btn-outline-secondary">Sign up</Button>

    </div >
  )
}

export default HomePage
