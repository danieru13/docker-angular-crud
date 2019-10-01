import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  arabicToRoman(arabic: number): String {
    const romanNumbers = ["V", "IV", "I"];
    const arabicNumbers = [5, 4, 1];

    let roman = ""

    for(let i = 0; i < arabicNumbers.length; i++){
      while(arabicNumbers[i] <= arabic) {
        roman += romanNumbers[i];
        arabic -= arabicNumbers[i];
      }
    }
    return roman;
  }
}
