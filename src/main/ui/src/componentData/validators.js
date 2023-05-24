// @ts-check

import React from "react";
import { Data } from "./data";

/**
 * @typedef {React.ChangeEvent<HTMLInputElement>} ReactChangeEvent
 * @typedef {(event: ReactChangeEvent) => boolean} Validator
 */

/**
 * Doğrulayıcı oluşturur - Doğrulayıcının başarılı olmasını istiyorsanız true döndürünüz
 * @param {Validator} validator
 * @returns {Validator}
 */
export function createValidator(validator) {
  return validator;
}

/**
 * React elementi değiştiğinde görev yapacak doğrulayıcıları kapsayan üstleniciyi oluşturur
 * @param {Data} data
 * @param {(value: boolean) => void} setError
 * @param {string} name
 * @param {Validator[]} validators
 * @returns {Validator}
 */
export function createValidatorHandler(data, setError, name, validators) {
  return createValidator((event) => {
    const error = validateInOrder(event, validators);
    data.set(name, { error, refresh: setError, data: event.target.value });
    setError(error);
    return error;
  });
}

/**
 * Girilen doğrulayıcıları sıra ile onaylar ve hata varsa false döndürür.
 * @param {ReactChangeEvent} event
 * @param {Validator[]} validators Onaylayıcılar
 * @returns {boolean} Hepsi onaylandı mı
 */
export function validateInOrder(event, validators) {
  if (!validators?.length) return false;
  return !validators.every((validator) => validator(event));
}

export class Validators {
  static inputExists = createValidator((event) => (event.target.value.length === 0 ? false : true));

  /**
   * Metin maksimum uzunluğunu kontrol eder
   * @param {number} inputLength
   */
  static inputLength(inputLength) {
    return createValidator((event) => (event.target.value.length === inputLength ? true : false));
  }

  /**
   * Metin uzunluğunun maximum ve minumum karakterini kontrol eder
   * @param {number} minLength
   * @param {number} maxLength
   */
  static inputLengths(minLength, maxLength) {
    return createValidator(
      (event) => event.target.value.length >= minLength && event.target.value.length <= maxLength
    );
  }

  /**
   * Metnin bir Regex'e uyup uymamasını kontrol eder
   * @param {RegExp} regex
   */
  static regex(regex) {
    return createValidator((event) => {
      const str = event.target.value;
      return new RegExp(regex).test(str);
    });
  }

  /**
   * TC kimlik doğrulayıcısı
   * TC Kimlik algoritmasına göre çalışır
   * Kaynak: https://www.bundle.app/gundem/tc-kimlik-numaralarindaki-inanilmaz-algoritma-1cf92cef-4e7b-4843-878b-66f89a35a837
   */
  static identity = createValidator((event) => {
    const elements = event.target.value.split("").map((element) => +element);

    /**
     * @param  {...number} indexes
     */
    function elementSum(...indexes) {
      return indexes.reduce((total, current) => total + getElement(current), 0);
    }

    /**
     * @param {number} indexFromOne
     * @returns {number}
     */
    function getElement(indexFromOne) {
      return elements[indexFromOne - 1];
    }

    const oddTotal = elementSum(1, 3, 5, 7, 9);
    const evenTotal = elementSum(2, 4, 6, 8);
    const next = (oddTotal * 7 - evenTotal) % 10;

    if (next !== getElement(10)) return false;

    const firstTen = oddTotal + evenTotal + next;
    const last = firstTen % 10;

    return last === getElement(11);
  });

  /**
   * Pozitif tam sayı doğrulayıcısı
   */
  static positiveIntegerInput = createValidator((event) => {
    if (!this.inputExists(event)) return false;

    const value = +event.target.value;

    if (Number.isNaN(value) || typeof value !== "number" || value < 0 || !Number.isInteger(value))
      return false;

    return true;
  });
}
