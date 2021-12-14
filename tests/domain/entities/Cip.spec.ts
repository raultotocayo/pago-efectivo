// @flow
import { Cip } from '../../../src/domain/entities/Cip';
describe('Cip', () => {
    test('Should be has status in PENDING by default', () => {
        const status = 'PENDING';
        const newCip = new Cip({
        })
        expect(newCip.status).toBe(status);
    });
});