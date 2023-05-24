// @ts-check

import React from "react";

import { Row } from "./Row.js";
import { Data } from "../componentData/data.js";

/**
 * Satırları listeleyip toparlayan bölüm
 * @param {{ rows: import("./Row.js").RowData[][], data: Data }} props
 */
export function RowList({ rows, data }) {
  const mappedRows = rows.map((row) => (
    <Row
      key={crypto.randomUUID()}
      data={data}
      rows={row.reduce(
        /** @param {import("./Row.js").RowData[]} total */ (total, rowData) => [...total, rowData],
        []
      )}
    />
  ));

  return <>{mappedRows}</>;
}
