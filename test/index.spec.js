const assert = require('assert');
const cardValidator = require('../index');

describe('cardValidator()', function () {
    it('deve retornar cartão válido', () => {
        assert.equal(cardValidator('5232840484143290'), 'CARTÃO VÁLIDO!');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator('52328404841432901'), 'CARTÃO INVÁLIDO!');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator('5290530003816927'), 'CARTÃO VÁLIDO!');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator('5290530003816928'), 'CARTÃO INVÁLIDO!');
    });

    it('deve retornar cartão válido', () => {
        assert.equal(cardValidator('aaaaaaaaa'), 'CARTÃO INVÁLIDO!');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator(' '), 'CARTÃO INVÁLIDO!');
    });

    it('deve retornar cartão inválido', () => {
        assert.equal(cardValidator('000dddddsss000'), 'CARTÃO INVÁLIDO!');
    });
});