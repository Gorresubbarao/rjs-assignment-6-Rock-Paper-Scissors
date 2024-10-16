import styled from 'styled-components'

export const GameResultViewContainer = styled.div`
display: flex;
flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-top:40px;
  width:100%;
`
export const FirstTwoButtonsConatiner = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
`
export const ButtonGameImg = styled.button`
border:none;
background:transparent;
`
export const GameImg = styled.img`
height:98px;
width:145px;
@media (min-width:768px){
height:156px;
width:245px;
}

`
export const YouText = styled.p`
color:#ffffff;
font-size:10px;
`
export const RestartGmaeButton = styled(ButtonGameImg)`
background:#ffffff;
  border-radius: 6px;
`
export const ResultText = styled(YouText)`
font-family:Roboto;
`
