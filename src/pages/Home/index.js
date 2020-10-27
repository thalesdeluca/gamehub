import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { GameButton, Button } from '../../components'
import { games } from '../../constants'
import "./styles.scss"

function HomePage() {
  const history = useHistory();
  const { user } = useSelector(state => state.auth);
  console.log("home", user)
  const renderAuthButtons = () => !user?.token && (
    <>
      <Button className="btn-primary" onClick={() => history.push("/login")}>Log In</Button>
      <Button className="btn-outline-secondary" onClick={() => history.push("/signup")}>Sign up</Button>
    </>
  )
  return (
    <div id="home">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span className="title-site" >GameHUB</span>
      </Link>


      <div className="game-list">
        {Object.values(games).map((value) => (
          <GameButton {...value} />
        ))}
      </div>

      {renderAuthButtons()}
    </div>
  )
}

export default HomePage
