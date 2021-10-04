import { TableRow, TableCol, TableColHeader } from "../style";

import { strings } from "src/utils/strings";
import { isALink } from "src/utils/isALink";

export const ProductTableRow = ({ products = [], fieldName, highlight }) => {
  return (
    <TableRow highlight={highlight}>
      <TableColHeader>{strings[fieldName] || fieldName}</TableColHeader>
      {products.map((product) => {
        if (typeof product[fieldName] === "object") return "";
        if (isALink(product[fieldName]))
          return (
            <TableCol>
              <img src={product[fieldName]} />
            </TableCol>
          );
        return <TableCol> {product[fieldName] || "-"}</TableCol>;
      })}
    </TableRow>
  );
};
