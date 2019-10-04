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

  it(`Seis 6 debe ser igual a 'VI'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(6)).toEqual('VI');
  });

  it(`Nueve 9 debe ser igual a 'IX'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(9)).toEqual('IX');
  });

  it(`Diez 10 debe ser igual a 'X'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(10)).toEqual('X');
  });

  it(`Catorce 14 debe ser igual a 'XIV'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(14)).toEqual('XIV');
  });

  it(`Veinte 20 debe ser igual a 'XX'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(20)).toEqual('XX');
  });

  it(`Cuarenta 40 debe ser igual a 'XL'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(40)).toEqual('XL');
  });

  it(`Cincuenta 50 debe ser igual a 'L'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(50)).toEqual('L');
  });

  it(`Noventa 90 debe ser igual a 'XC'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(90)).toEqual('XC');
  });

  it(`Cien 100 debe ser igual a 'C'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(100)).toEqual('C');
  });

  it(`Cuatrocientos 400 debe ser igual a 'CD'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(400)).toEqual('CD');
  });

  it(`Quinientos 500 debe ser igual a 'D'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(500)).toEqual('D');
  });

  it(`Novecientos 900 debe ser igual a 'CM'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(900)).toEqual('CM');
  });

  it(`Mil 1000 debe ser igual a 'M'`, () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(1000)).toEqual('M');
  });
});
