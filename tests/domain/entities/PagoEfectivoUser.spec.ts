import { PagoEfectivoUser } from '../../../src/domain/entities/PagoEfectivoUser';
describe('PagoEfectivoUser', () => {
    test('Should be has key', () => {
        const KEY = 'pagoefectivo-user';
        const pagoEfectivoUser = new PagoEfectivoUser({
            token: 'token',
            codeService: 'codeService',
            tokenStart: 'tokenStart',
            tokenExpires: 'tokenExpires'
        })
        expect(pagoEfectivoUser.key).toBe(KEY);
    });
});