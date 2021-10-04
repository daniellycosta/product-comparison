import styled from "styled-components";

export const Container = styled.header`
  background: var(--dark-blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  h1 {
    color: var(--shape);
  }

  button {
    color: var(--shape);
    background: var(--blue-light);
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  gap: 1rem;
`;
