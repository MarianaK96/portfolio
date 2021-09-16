import styled from "styled-components"

// export const Wrapper = styled.div`
//   height: 400px;
//   width: 400px;
//   background-color: ${({ on }) => on ? "red" : "white"};

//declaring the property in
// on={on}

//   & > button {
//     color: blue;
//   }
// `

export const HeadingWrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
  & > h1 {
    font-size: 4rem;
    font-style: italic;
    color: #f8f8ff;
    font-family: "Poppins", sans-serif;
  }
`

export const SubtitleWrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
  & > p {
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.8;
    color: #f8f8ff;
    font-family: "Montserrat", sans-serif;
  }
`
