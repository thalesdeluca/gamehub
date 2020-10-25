import React from 'react'
import triangleImg from "../../assets/images/bg-triangle.svg"
import iconPaperImg from "../../assets/images/icon-paper.svg"
import iconScissorsImg from "../../assets/images/icon-scissors.svg"
import iconRockImg from "../../assets/images/icon-rock.svg"
import "./styles.scss"

function JokenpoPage() {
  return (
    <div className="jokenpo-container">
      <div className="container">
        <div className="header">
          <div className="title-container">
            <span className="title">ROCK</span>
            <span className="title">PAPER</span>
            <span className="title">SCISSORS</span>
          </div>

          <div className="score-container">
            <span className="score-header">SCORE</span>
            <span id="score" className="score">0</span>
          </div>
        </div>

        <div id="buttons" className="buttons-container">
          <img src={triangleImg} className="center-triangle" />
          <div className="top-buttons">
            <button id="paper">
              <div className="action-btn blue">
                <img src={iconPaperImg} />
              </div>
            </button>
            <button id="scissors">
              <div className="action-btn yellow">
                <img src={iconScissorsImg} />
              </div>
            </button>
          </div>

          <button id="rock">
            <div className="action-btn red">
              <img src={iconRockImg} />
            </div>
          </button>
        </div>


        <div id="results" className="results-container">
          <div className="picked" id="picked">
            <span className="result-title">YOU PICKED</span>

          </div>

          <div className="cpu" id="cpu">
            <span className="result-title">THE HOUSE PICKED</span>

          </div>
        </div>

        <button type="button" className="btn btn-info btn-lg rules leaderboards" data-toggle="modal" data-target="#leaderboards"
          id="leaderboards-btn">
          <img src="./assets/images/rank.svg" className="rank-icon" />
        </button>

        <button type="button" className="btn btn-info btn-lg rules scorebtn" data-toggle="modal" data-target="#saveScore">
          SAVE SCORE
    </button>

        <button type="button" id="again" className="btn btn-info btn-lg rules again none">
          PLAY AGAIN
    </button>
        <span id="results-title"></span>

      </div>



      <button type="button" class="btn btn-info btn-lg rules" data-toggle="modal" data-target="#ruleModal">RULES</button>

      <div class="modal fade" id="ruleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Rules</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src="./assets/images/image-rules.svg" class="d-block mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JokenpoPage
