import {expect, test} from '@jest/globals';
import sum from './sum';


  test('adds 10 + 20 to equal 30', () => {
    let a=10;
    let b=20;
    let output=30
    expect(sum(a, b)).toBe(output);
  });
