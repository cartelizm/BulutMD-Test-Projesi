import React from "react";

import x from "../images/error.png";
import "../style/SuccessPopup.scss";
// Gönderme butonuna tıklanınca sorunsuz bir şekilde veritabanına veri gönderilirse bilgilendirme mesajı gönderilen yer
export function ErrorPopup() {
  function errorPopup() {
    const errorPopup = document.getElementById("errorPopup");

    if (!errorPopup) return;

    errorPopup.classList.remove("successPopupOpen");
  }

  return (
    <div className="successPopup" id="errorPopup">
      <img src={x} />
      <h2>Gönderilemedi</h2>
      <p>Girdiğiniz bilgileri kontrol ediniz.</p>
      <button type="button" onClick={errorPopup}>
        Kapat
      </button>
    </div>
  );
}
