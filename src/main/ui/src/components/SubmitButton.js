import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";

import { Data } from "../componentData/data.js";

import "../style/SubmitButton.scss";
import { rows } from "../componentData/rows.js";

/**
 * Gönderme butonunun bulunduğu bölüm
 * Zorunlu alanların doldurulmadığında butonun kaçmasını sağlayan bölüm burası
 * @param {{ data: Data }} props
 */
export function SubmitButton({ data }) {
  let refreshed = false;

  function onHover() {
    const button = document.getElementById("slide-button");
    const hasError = data.isErrorAvailable();

    if (!button || !hasError) return;

    button.classList.toggle("move");
    button.disabled = true;
    setTimeout(() => (button.disabled = false), 100);

    if (!refreshed) {
      refreshed = true;
      data.refresh();
    }
  }

  function onClick() {
    const dataList = data.valueArray();
    const errorGiven = dataList.find(({ error }) => error === true);

    if (errorGiven) {
      dataList.forEach(({ error, refresh }) => refresh(error ?? false));
    } else {
      const successPopup = document.getElementById("successPopup");
      const errorPopup = document.getElementById("errorPopup");

      if (!successPopup || !errorPopup) return;

      axios
        .post("http://localhost:8080/api/forms", data.getJSON(rows))
        .then((response) => {
          if (response.status === 200) {
            successPopup.classList.add("successPopupOpen");
          } else {
            errorPopup.classList.add("successPopupOpen");
          }
        })
        .catch(() => {
          errorPopup.classList.add("successPopupOpen");
        });
    }
  }

  return (
    <div className="submitContainer">
      <MDBBtn id="slide-button" className="stop" onMouseEnter={onHover} onClick={onClick}>
        Kayan Buton
      </MDBBtn>
    </div>
  );
}
