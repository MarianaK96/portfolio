import styled from "styled-components";

export const ProjectsTitle = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
  & > h1 {
    font-size: 2.8rem;
    font-style: italic;
    color: #f8f8ff;
    font-family: "Poppins", sans-serif;
  }
`;
export const SectionPadding = styled.div`
  padding-top: 3rem;
`;

export const ParagraphWrapper = styled.div`
  font-weight: 100;
  font-size: 1.2rem;
  line-height: 1.3;
  color: #f8f8ff;
  font-family: "Montserrat", sans-serif;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > a {
    font-weight: 100;
    font-size: 1.2rem;
    line-height: 1.3;
    color: #f8f8ff;
    font-family: "Montserrat", sans-serif;
    margin-top: 0;
    text-decoration: none;
  }
`;

export const Underline = styled.div`
  padding-top: 8rem;
  margin-bottom: 2rem;
  border-bottom: 3px solid white;
`;
