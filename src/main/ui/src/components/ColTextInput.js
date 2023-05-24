// @ts-check

import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";

import { createValidatorHandler, Validators } from "../componentData/validators.js";
import { Data } from "../componentData/data.js";

import "../style/Application.scss";
import { Required } from "./Required.js";

/**
 * Metin girdisi
 * @param {{ label?: string, col?: string, validators?: import("../componentData/validators.js").Validator[], data: Data }} props
 */
export function ColTextInput({
  label = "Default Label",
  col = "6",
  validators = [Validators.inputExists],
  data,
}) {
  const [error, setError] = useState(false);
  data.set(label, { refresh: setError });
  const handler = createValidatorHandler(data, setError, label, validators);

  return (
    <MDBCol className={`col-${col} colTextColumn`}>
      <MDBInput
        className="colTextInput"
        wrapperClass="mb-5"
        label={label}
        type="text"
        onInput={handler}
      />
      {error && <Required />}
    </MDBCol>
  );
}
