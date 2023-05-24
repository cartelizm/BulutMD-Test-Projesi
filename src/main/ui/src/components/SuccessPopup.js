import React from "react";

import tick from "../images/tick.png";
import "../style/SuccessPopup.scss";
// Gönderme butonuna tıklanınca sorunsuz bir şekilde veritabanına veri gönderilirse bilgilendirme mesajı gönderilen yer
export function SuccessPopup() {
  function closePopup() {
    const successPopup = document.getElementById("successPopup");

    if (!successPopup) return;

    successPopup.classList.remove("successPopupOpen");
  }

  return (
    <div className="successPopup" id="successPopup">
      <img src={tick} />
      <h2>Teşekkürler</h2>
      <p>Girdiğiniz bilgiler başarıyla gönderildi.</p>
      <button type="button" onClick={closePopup}>
        Kapat
      </button>
    </div>
  );
}
