import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;

  input {
    border-radius: ${(props) =>
      props.optionsOpen
        ? "0.25rem 0rem 0rem 0rem"
        : "0.25rem 0rem 0rem 0.25rem"};
  }

  button {
    padding: 0 0.5rem;
    height: 4rem;
    border-radius: ${(props) =>
      props.optionsOpen
        ? "0rem 0.25rem 0rem 0rem"
        : "0rem 0.25rem 0.25rem 0rem"};
    border: 1px #d7d7d7;
    background: #e7e9ee;

    transition: filter 0.2s;
    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.ol`
  position: absolute;
  width: 100%;

  border-radius: 0 0 0.3125rem 0.3125rem;

  list-style-type: none;

  li {
    text-align: justify;
    padding: 0.5rem 1rem;

    background-color: #e7e9ee;
    transition: filter 0.2s;

    &.selected {
      filter: brightness(0.9);
    }

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }

    &.disabled {
      cursor: not-allowed;

      font-style: italic;
      color: var(--text-body);
    }

    &:last-child {
      border-radius: 0 0 0.3125rem 0.3125rem;
    }
  }
`;
