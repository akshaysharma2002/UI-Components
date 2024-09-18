import React from "react";
import styles from "./table.module.css";

const Table = ({ data, styleClass }) => {
  //get all keys
  const allColumns = data.reduce((acc, row) => {
    return [...acc, ...Object.keys(row).filter((key) => !acc.includes(key))];
  }, []);

  return (
    <div
      className={`table-responsive d-flex align-items-center justify-content-center ${styles.mt10}`}
    >
      <table
        className={
          styleClass.tableClass
            ? `table ${styles.w80} ${styleClass.tableClass}`
            : `table ${styles.w80}`
        }
      >
        <thead className={styleClass.theadClass ? styleClass.theadClass : ""}>
          <tr>
            {allColumns.map((column) => (
              <th scope="col" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styleClass.tbodyClass ? styleClass.tbodyClass : ""}>
          {data.map((row, index) => (
            <tr className={styles.bodyrow} key={index}>
              {allColumns.map((column) => (
                <td key={column}>
                  {row[column] !== undefined ? row[column] : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
