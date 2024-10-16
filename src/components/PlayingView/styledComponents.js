import styled from 'styled-components'

export const AppContainer = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
background-color:#223a5f;
min-height:100vh;
`
export const ResponseConatiner = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
width:90%;
max-width:567px;
@media (min-width:768px){
    width:86%;
max-width:1155px;
}
`
export const ButtonsImagesList = styled.ul`
padding-left:0px;
`
export const RulesButton = styled.button`
border:none;
background:#ffffff;
  border-radius: 6px;
  display:flex;
  align-self: flex-end;
`
export const CloseButton = styled(RulesButton)`
background:transparent;
`
export const PopUpImage = styled.img`
height:140px;
width:220px;
`
export const PopupView = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:40vh;`
