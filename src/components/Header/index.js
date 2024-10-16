import {
  NavConatainer,
  GameNameListConatiner,
  GameName,
  GameNameHeading,
  ScoreConatiner,
  Scoretext,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <NavConatainer>
      
        <GameNameHeading>ROCK PAPER SCISSORS</GameNameHeading>
    
      <ScoreConatiner>
        <Scoretext>Score</Scoretext>
        <Score>{score}</Score>
      </ScoreConatiner>
    </NavConatainer>
  )
}

export default Header
