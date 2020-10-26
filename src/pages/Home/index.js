import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GameButton, Button } from '../../components'
import { games } from '../../constants'
import "./styles.scss"

function HomePage() {
  const history = useHistory();

  return (
    <div id="home">
      <span className="title-site">GameHUB</span>

      <div className="game-list">
        {Object.values(games).map((value) => (
          <GameButton {...value} />
        ))}
      </div>

      <Button className="btn-primary" onClick={() => history.push("/login")}>Log In</Button>
      <Button className="btn-outline-secondary" onClick={() => history.push("/signup")}>Sign up</Button>
    </div>
  )
}

export default HomePage
