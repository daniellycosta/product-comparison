import styled from "styled-components";

export const Table = styled.table`
  color: var(--text-body);
  width: 100%;

  border-radius: 0.3125rem;
  background-color: #ffff;
`;

export const TableRow = styled.tr`
  color: var(--text-body);
  background: ${(props) =>
    props.highlight ? "var(--background)" : "var(--shape)"};
`;

export const TableColHeader = styled.th`
  color: var(--text-title);
  text-align: ${(props) => (props.centralize ? "center" : "justify")};
  padding: 1rem;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .deleteProduct {
    border: 0;
    background: none;

    transition: filter 0.2s;

    padding: 0.5rem;
    border-radius: 3.125rem;

    &:hover {
      background-color: #e7e9ee;
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;

export const TableCol = styled.td`
  color: var(--text-body);
  padding: 1rem;
  text-align: center;
`;
