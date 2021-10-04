import { Table, TableRow, TableColHeader } from "./style";
import notFoundImage from "src/assets/notFound.png";
import deleteImage from "src/assets/delete.svg";

import { ProductTableRow } from "./ProductTableRow";

import { tableFields } from "src/utils/tableFields";
import { fieldsNotConsideredOnComparison } from "src/utils/fieldsNotConsideredOnComparison";
import { useSelectedProducts } from "src/hooks/useSelectedProducts";

export const ProductTable = () => {
  const { selectedProducts, deleteProduct } = useSelectedProducts();

  const sortedTableFields = tableFields.sort((a, b) =>
    a
      .toLowerCase()
      .localeCompare(b.toLowerCase(), "en", { sensitivity: "base" })
  );

  const shouldHighlightRow = (fieldName) => {
    if (fieldsNotConsideredOnComparison.includes(fieldName)) return false;

    return selectedProducts.some((product, _, array) => {
      return array.some((item) => item[fieldName] !== product[fieldName]);
    });
  };

  return (
    <Table>
      <TableRow>
        <TableColHeader centralize> - </TableColHeader>
        {selectedProducts.length !== 0 &&
          selectedProducts.map(({ name, productImage }, i) => {
            return (
              <TableColHeader key={i}>
                <button
                  className="deleteProduct"
                  onClick={() => deleteProduct(name)}
                >
                  <img src={deleteImage} />
                </button>

                <img
                  src={productImage}
                  alt={name}
                  onError={(event) => {
                    event.target.src = notFoundImage;
                  }}
                />
                <p>{name}</p>
              </TableColHeader>
            );
          })}
      </TableRow>
      {sortedTableFields.map((fieldName) => (
        <ProductTableRow
          highlight={shouldHighlightRow(fieldName)}
          key={fieldName}
          products={selectedProducts}
          fieldName={fieldName}
        />
      ))}
    </Table>
  );
};
