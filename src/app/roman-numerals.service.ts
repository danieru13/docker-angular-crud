import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  arabicToRoman(arabic: number): String {
    const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let roman = ""

    for (let i = 0; i < arabicNumbers.length; i++) {
      while (arabicNumbers[i] <= arabic) {
        roman += romanNumbers[i];
        arabic -= arabicNumbers[i];
      }
    }
    return roman;
  }
}
