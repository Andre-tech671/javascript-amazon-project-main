import {formatCurrency} from '../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('converts cents to dollars and formats to two decimal places', () => {
        expect(formatCurrency(2095)).toEqual("20.95");
    });

    it('works with zero', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the next cent', () => {
        expect(formatCurrency(2000.5)).toEqual("20.01");
        expect(formatCurrency(2000.49)).toEqual("20.00");
    });
});