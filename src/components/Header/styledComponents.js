import styled from 'styled-components'

export const NavConatainer = styled.nav`
display: flex;
  justify-content: space-between;
  align-items: center;
  border-raduis:7px;
  border:1px solid #ffffff;
  width:100%;
  height:30vh;
  padding:30px;
`

export const GameNameListConatiner = styled.ul`
  padding-left:0px;
`
export const GameName = styled.li`
list-style-type: none;
 color:#ffffff;
  font-size:10px;
margin-top:10px;
`
export const ScoreConatiner = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Scoretext = styled.p`
  color:#ffffff;
  font-size:10px;
`

export const Score = styled.p`
font-size:30px;
color:#ffffff;
`
export const GameNameHeading = styled.h1`
color:#ffffff;
  font-size:10px;
`
