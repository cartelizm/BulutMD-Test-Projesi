// @ts-check

import React from "react";

import "../style/Application.scss";

// Zorunlu yazısı
export function Required() {
  return (
    <div className="colTextContainer">
      <div className="colTextWarning">
        <i className="fa fa-exclamation-circle">
          <i className="colText"> Zorunlu</i>
        </i>
      </div>
    </div>
  );
}
