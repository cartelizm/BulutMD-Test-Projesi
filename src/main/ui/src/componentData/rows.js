// @ts-check

import { Validators } from "./validators.js";

/**
 * @typedef {import("../components/Row.js").RowData[][]} Rows
 */

// Regex şablonları

const alphabet = "abcçdefgğhıijklmnoöprsştuüvyzABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZwWqQxX";

// Doğrulayıcılar

const nameValidator = Validators.regex(new RegExp(`^[${alphabet}]{3,18}$`, "g"));
const surnameValidator = Validators.regex(new RegExp(`^[${alphabet}]{2,18}$`, "g"));

const emailValidator = Validators.regex(
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
);
const phoneValidator = Validators.regex(
  /^(?:(?:(?:\+90)|0)?(?:\s?)(?:[123456789]\d{2})(\s{0,1})(?:\d{3})\1(\d{2})\1(?:\d{2}))$/g
);
const identityValidators = [Validators.regex(/^[123456789]\d{10}$/g), Validators.identity];

// Dışa aktarım

/**
 * @type {Rows}
 */
export const rows = [
  [
    { text: "İsim", dbColumn: "name", extraValidators: [nameValidator] },
    { text: "Soyisim", dbColumn: "surname", extraValidators: [surnameValidator] },
  ],
  [
    { text: "E-Posta", dbColumn: "email", extraValidators: [emailValidator] },
    { text: "Telefon", dbColumn: "phoneNumber", extraValidators: [phoneValidator] },
  ],
  [
    { text: "TC Kimlik", dbColumn: "identity", extraValidators: identityValidators },
    { text: "Doğum Tarihi", dbColumn: "birth", type: "date" },
  ],
  [{ text: "Adres", dbColumn: "address" }],
  [
    { text: "Perakende Ticareti ile Uğraştınız mı?", dbColumn: "question1" },
    { text: "Lokumcu Baba'yı Tercih Etmenizin Sebebi Nedir?", dbColumn: "question2" },
  ],
  [
    {
      text: "Yatırım Miktarınız Nedir?",
      dbColumn: "question3",
      extraValidators: [Validators.positiveIntegerInput],
    },
    { text: "Eklemek İstedikleriniz?", dbColumn: "wantToAdd", validators: [] },
  ],
];
