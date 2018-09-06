const assert = require('assert');
const cardValidator = require('../index');

describe('cardValidator()', function () {
    it('deve retornar cartão válido', () => {
        assert.equal(cardValidator('5232840484143290'), 'true');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator('52328404841432901'), 'false');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator('5290530003816927'), 'true');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator('5290530003816928'), 'false');
    });

    it('deve retornar cartão válido', () => {
        assert.equal(cardValidator('aaaaaaaaa'), 'false');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator(' '), 'false');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator('000dddddsss000'), 'false');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator('9'), 'false');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator('999999999999999'), 'false');
    });
});