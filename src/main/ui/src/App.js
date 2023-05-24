// @ts-check

import React from "react";
import { MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";

import { RowList } from "./components/RowList.js";
import { SubmitButton } from "./components/SubmitButton.js";
import { AppLogo } from "./components/AppLogo.js";

import { rows } from "./componentData/rows.js";
import { AppFooter } from "./components/AppFooter.js";
import { Data } from "./componentData/data.js";
import { SuccessPopup } from "./components/SuccessPopup";
import { ErrorPopup } from "./components/ErrorPopup.js";

import "./style/Application.scss";

//Kullanacağımız verilerin ve paketlerin importlarının bulunduğu bölüm

//Genel React şablonunu oluşturan kodlar ve formun oluşturulup gönderildiği nokta

export default function App() {
  const data = new Data();

  return (
    <MDBContainer fluid>
      <AppLogo />
      {/* Resmin üzerinde kalan beyaz kısmı ayarlayan kod bölümü (Görsellik ayarlamaları) */}
      <MDBCard className="mx-5 mb-5 p-5 shadow-5 appCard">
        {/* Fullstack calısmasında yönergede bulunması istenen bilgilerin form içinde oluşturulduğu nokta */}
        <MDBCardBody className="p-5 align-middle">
          <h2 className="fw-bold mb-5 text-center">Bayilik Ön Başvuru Formu</h2>
          <RowList rows={rows} data={data} />
          {/* Zorunlu check bölümü formda doldurulan eposta ve telefon numarasının şirket yetkilileri tarafından kullanılabilmesi açısından*/}
          {/* Kendime not checkmark zorunlu olacak işaretlenmeden form gönderilmeyecek */}
          {/* <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Başvurumun onaylanması veya reddedilmesi durumunda Lokumcu Baba'nın benimle e-posta veya telefon yoluyla iletişime geçmesine izin veriyorum."
            defaultChecked
          /> */}

          {/* Formu göndermeye yarayan buton */}
          <SubmitButton data={data} />
          <SuccessPopup />
          <ErrorPopup />
          <AppFooter />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
