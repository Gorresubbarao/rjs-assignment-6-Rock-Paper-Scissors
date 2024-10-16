import {Component} from 'react'
import Header from '../Header'
import GameResultView from '../GameResultView'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

import {
  AppContainer,
  ResponseConatiner,
  RulesButton,
  CloseButton,
  PopUpImage,
  PopupView,
} from './styledComponents'

class PlayingView extends Component {
  state = {
    score: 0,
    newArray: [choicesList[0], choicesList[1]],
    isGameOn: true,
    text: 'YOU WON',
  }

  getResultText = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'SCISSORS':
          return 'YOU WON'
        case 'PAPER':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  onClickImg = id => {
    const {score} = this.state
    const opponentObj =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const myChoiceList = choicesList.filter(each => each.id === id)
    const myChoiceObj = myChoiceList[0]
    const textResult = this.getResultText(myChoiceObj, opponentObj)
    let newScore = score

    if (textResult === 'YOU WON') {
      newScore = score + 1
    } else if (textResult === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isGameOn: false,
      score: newScore,
      newArray: [myChoiceObj, opponentObj],
      text: textResult,
    })
  }

  reStartGame = () => {
    this.setState({
      isGameOn: true,
    })
  }

  render() {
    const {isGameOn, text, newArray, score} = this.state

    return (
      <AppContainer>
        <ResponseConatiner>
          <Header score={score} />
          <GameResultView
            choicesList={choicesList}
            isGameOn={isGameOn}
            score={score}
            newArray={newArray}
            text={text}
            onClickImg={this.onClickImg}
            reStartGame={this.reStartGame}
          />
          <Popup
            modal
            trigger={
              <RulesButton data-testid="data-testid" type="button">
                RULES
              </RulesButton>
            }
          >
            {close => {
              return (
                <PopupView>
                  <CloseButton
                    data-testid="data-testid"
                    type="button"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </CloseButton>
                  <PopUpImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupView>
              )
            }}
          </Popup>
        </ResponseConatiner>
      </AppContainer>
    )
  }
}

export default PlayingView
