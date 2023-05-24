import React from "react";

import lokumcuLogo from "../images/lokum-logo.png";
import "../style/Application.scss";

export function AppLogo() {
  // Arkaplandaki lokum tasarımının forma yerleştirildiği bölüm */
  return (
    <div className="p-5 bg-image appLogoBackground">
      <div className="position-relative">
        {/* Arkaplandaki lokum tasarımının üzerine yerleştirlien Lokumcu Baba simgesi ve görüntü ayarları */}
        <img
          src={lokumcuLogo}
          className="position-absolute top-50 start-50 translate-middle appLogo"
        />
      </div>
    </div>
  );
}
