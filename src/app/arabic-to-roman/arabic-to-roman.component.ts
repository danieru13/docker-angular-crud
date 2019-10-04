import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService } from '../roman-numerals.service';

@Component({
  selector: 'app-arabic-to-roman',
  templateUrl: './arabic-to-roman.component.html',
  styleUrls: ['./arabic-to-roman.component.css']
})
export class ArabicToRomanComponent implements OnInit {
  result: String = '';

  constructor(private rns: RomanNumeralsService) { }

  ngOnInit() {
  }
  
  arabicToRoman(num: number){
    this.result = this.rns.arabicToRoman(num);
    console.log(this.result);
  }
}
