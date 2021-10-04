import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Content = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.noElements ? "center" : "flex-start")};
  align-items: center;

  overflow: auto;

  h1 {
    color: var(--text-body);
    font-style: italic;
  }

  @media only screen and (max-width: 720px) {
    justify-content: center;
    flex-direction: column;
  }
`;
