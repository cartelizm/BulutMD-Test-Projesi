// @ts-check

import React from "react";

import "../style/Application.scss";

export function AppFooter() {
  // Tüm hakları saklıdır yazısı ve şirket ismi
  return (
    <div style={{ textAlign: "center" }}>
      <p className="footer">© {new Date().getFullYear()} Lokumcu Baba | Tüm Hakları Saklıdır.</p>
    </div>
  );
}
