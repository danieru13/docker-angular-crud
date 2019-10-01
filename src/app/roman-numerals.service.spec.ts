import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service).toBeTruthy();
  });

  it(`Uno 1 debe ser igual a 'I'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(1)).toEqual('I');
  });

  it(`Dos 2 debe ser igual a 'II'`, () => { 
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(2)).toEqual('II');
  });

  it(`Tres 3 debe ser igual a 'III'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(3)).toEqual('III');
  });

  it(`Cuatro 4 debe ser igual a 'IV'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(4)).toEqual('IV');
  });

  it(`Cinco 5 debe ser igual a 'V'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(5)).toEqual('V');
  });
});
