import {
  GameResultViewContainer,
  FirstTwoButtonsConatiner,
  ButtonGameImg,
  GameImg,
  YouText,
  RestartGmaeButton,
  ResultText,
} from './styledComponents'

const GameResultView = props => {
  const {choicesList, isGameOn, text, newArray, reStartGame, onClickImg} = props

  return (
    <GameResultViewContainer>
      {isGameOn ? (
        <>
          <FirstTwoButtonsConatiner>
            <ButtonGameImg
              data-testid="rockButton"
              type="button"
              onClick={() => onClickImg(choicesList[0].id)}
            >
              <GameImg src={choicesList[0].imageUrl} alt={choicesList[0].id} />
            </ButtonGameImg>
            <ButtonGameImg
              data-testid="scissorsButton"
              type="button"
              onClick={() => onClickImg(choicesList[1].id)}
            >
              <GameImg src={choicesList[1].imageUrl} alt={choicesList[1].id} />
            </ButtonGameImg>
          </FirstTwoButtonsConatiner>
          <ButtonGameImg
            data-testid="paperButton"
            type="button"
            onClick={() => onClickImg(choicesList[2].id)}
          >
            <GameImg src={choicesList[2].imageUrl} alt={choicesList[2].id} />
          </ButtonGameImg>
        </>
      ) : (
        <>
          <YouText>YOU</YouText>
          <GameImg src={newArray[0].imageUrl} alt="your choice" />
          <YouText>OPPONENT</YouText>
          <GameImg src={newArray[1].imageUrl} alt="opponent choice" />
          <ResultText>{text}</ResultText>
          <RestartGmaeButton
            data-testid="data-testid"
            type="button"
            onClick={reStartGame}
          >
            PLAY AGAIN
          </RestartGmaeButton>
        </>
      )}
    </GameResultViewContainer>
  )
}

export default GameResultView
