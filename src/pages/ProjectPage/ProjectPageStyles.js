import styled from "styled-components";

export const ProjectsTitle = styled.div`
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
