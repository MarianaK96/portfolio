import styled from "styled-components"

export const ModalStyle = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  padding-top: 5rem;
  padding-bottom: 3rem;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 5;

  display: ${({ modal }) => (modal ? "flex" : "none")};

  & > a {
    color: black;
    display: inline;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
  }

  & > a:hover {
    color: #fec8af;
  }

  & > p {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const CloseBtnStyle = styled.div`
  position: absolute;
  padding: 2.4rem;
  top: 0;
  right: 0;
`
// display: ${modal ? "inline" : "hidden"};
