// test.js
const assert = require('assert');
const cifradoCesar = require('../CesarC/cifrar');

describe('Cifrado César', function() {
    it('debería cifrar correctamente con un desplazamiento de 3', function() {
        assert.strictEqual(cifradoCesar('Hola', 3), 'Krod');
    });

    it('debería manejar letras minúsculas', function() {
        assert.strictEqual(cifradoCesar('mundo', 3), 'pxqgr');
    });

    it('debería mostrar un error si el texto está vacío', function() {
        assert.throws(() => cifradoCesar('', 3), /El texto no puede estar vacío/);
    });

    it('debería mostrar un error si el desplazamiento contiene números', function() {
        assert.throws(() => cifradoCesar('Hola', '3'), /El desplazamiento debe ser un número entero/);
    });

    it('debería devolver el resultado correcto con caracteres especiales', function() {
        assert.strictEqual(cifradoCesar('Hola, mundo 123', 3), 'Krod, pxqgr 123');
    });
});