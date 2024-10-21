// cifradoCesar.js
function cifradoCesar(texto, desplazamiento) {
    // Validación de campos vacíos
    if (!texto) {
        throw new Error('El texto no puede estar vacío.');
    }
    if (typeof desplazamiento !== 'number' || !Number.isInteger(desplazamiento)) {
        throw new Error('El desplazamiento debe ser un número entero.');
    }

    // Cifrado
    let resultado = '';
    
    for (const char of texto) {
        // Verificar si el carácter es una letra
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            let base;
            if (char >= 'A' && char <= 'Z') {
                base = 'A'.charCodeAt(0);
            } else if (char >= 'a' && char <= 'z') {
                base = 'a'.charCodeAt(0);
            }

            // Calcular el nuevo carácter cifrado
            const nuevoChar = String.fromCharCode(((char.charCodeAt(0) - base + desplazamiento) % 26 + 26) % 26 + base);
            resultado += nuevoChar; // Agregar el nuevo carácter al resultado
        } else {
            resultado += char; // Retornar el carácter sin cambios si no es una letra
        }
    }

    return resultado;
}

module.exports = cifradoCesar;