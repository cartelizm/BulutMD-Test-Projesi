import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import React from "react";

import { ColTextInput } from "./ColTextInput.js";
import { Validators, validateInOrder } from "../componentData/validators.js";
import { Data } from "../componentData/data.js";
import { ColDateInput } from "./ColDateInput.js";

//Row.js dosyası içinde kullanacağım değişkenlerin import edildiği nokta
//Bu dosyanın amacı girdi satırları (iki tane girdi satırını aynı anda almak ve işlemek için kolaylık sağlaması)

/**
 * @typedef {"text" | "date"} RowTypes
 * @typedef {{
 *  type?: RowTypes;
 *  text: string;
 *  dbColumn: string;
 *  validators?: import("../componentData/validators.js").Validator[]
 *  extraValidators?: import("../componentData/validators.js").Validator[]
 * }} RowData
 */

/**
 * @param {{ rows: RowData[]; data: Data }} rows
 */
export function Row({ rows, data }) {
  const rowArray = Object.values(rows);
  const newRows = rowArray
    .map((row, index) => {
      if (!row) return undefined;

      const {
        text,
        type = "text",
        validators = [Validators.inputExists],
        extraValidators = [],
      } = row;
      const col = `${
        index === rowArray.length - 1
          ? Math.ceil(12 / rowArray.length)
          : Math.floor(12 / rowArray.length)
      }`;
      const lastValidators = [...validators, ...extraValidators];

      data.set(text, {
        error: validateInOrder({ target: { value: "" } }, lastValidators),
      });

      switch (type) {
        case "text": {
          return (
            <ColTextInput
              key={crypto.randomUUID()}
              label={text}
              col={col}
              validators={lastValidators}
              data={data}
            />
          );
        }
        case "date": {
          return (
            <ColDateInput
              key={crypto.randomUUID()}
              label={text}
              col={col}
              validators={lastValidators}
              data={data}
            ></ColDateInput>
          );
        }
        default: {
          return (
            <MDBCol col={col}>
              <MDBInput wrapperClass="mb-4" label={text} type={type} />
            </MDBCol>
          );
        }
      }
    })
    .filter((row) => row);

  return <MDBRow>{newRows}</MDBRow>;
}
