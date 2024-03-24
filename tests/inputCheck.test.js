const inputCheck = require('../inputCheck');

test('Exits function', () => { 
    expect(inputCheck('exit')).toBe(0);
});

test('Null input', () => {
    expect(inputCheck('')).toBe(1);
});

test('Incorrect length', () => {
    expect(inputCheck('0')).toBe(2);
});

test('NaN before T', () => {
    expect(inputCheck('YYYYMMDDTHHMMSS')).toBe(3);
});

test('Invalid input format', () => {
    expect(inputCheck('00000000XHHMMSS')).toBe(4);
});

test('NaN after T', () => {
    expect(inputCheck('00000000THHMMSS')).toBe(5);
});

test('Invalid month range', () => {
    expect(inputCheck('20230000T000000')).toBe(6);
});

test('Invalid day range', () => {
    expect(inputCheck('20230132T000000')).toBe(7);
});

test('Invalid day range (month with 30 days)', () => {
    expect(inputCheck('20230431T000000')).toBe(8);
});

test('Invalid day range (non leap-year February)', () => {
    expect(inputCheck('20230229T000000')).toBe(9);
});

test('Invalid day range (leap-year February)', () => {
    expect(inputCheck('20240230T000000')).toBe(10);
});

test('Invalid hour range', () => {
    expect(inputCheck('20230128T240000')).toBe(11);
});

test('Invalid minute range', () => {
    expect(inputCheck('20230128T206000')).toBe(12);
});

test('Invalid second range', () => {
    expect(inputCheck('20230128T202960')).toBe(13);
});
