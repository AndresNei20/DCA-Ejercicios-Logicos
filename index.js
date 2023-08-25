  //-------------------------------INVERTIR CADENA DE CARACTERES-----------------------------------//
  //Escribe una función la cual tome de entrada una cadena y lo que devuelva sea la misma cadena pero invertida
  //Respuesta:
  function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  console.log(invertirCadena('hello')); 

  //--------------------------------ELIMINAR DUPLICADOS--------------------------------------------//
  //Cree una función la cual resiva como entrada un arreglo de números o bien sean datos y que sea capaz de identificar los duplicados y asi eliminarlos
  //Respuesta:
  function eliminarDuplicados(arr) {
    const resultado = [];
    for (let elemento of arr) {
      if (!resultado.includes(elemento)) {
        resultado.push(elemento);
      }
    }
    return resultado;
  }
  
  console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));

  //--------------------------------NÚMERO ROMANO A SU VERSIÓN DECIMAL----------------------------//
  function romanoADecimal(romano) {
    const valores = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let decimal = 0;
    for (let i = 0; i < romano.length; i++) {
      if (valores[romano[i]] < valores[romano[i + 1]]) {
        decimal -= valores[romano[i]];
      } else {
        decimal += valores[romano[i]];
      }
    }
  
    return decimal;
  }
  
  console.log(romanoADecimal('CCXXIV'));

  //-------------------------------IDENTIFICADOR DE NUMEROS PRIMOS------------------------//
  //que es un número primo: Un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos: 1 y él mismo. En otras palabras, un número primo no puede ser divisible por ningún otro número excepto por 1 y por sí mismo.
  //Enunciado: Cree una función la cual sea capaz de identificar si el número es primo
  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    
    // Comprobar divisibilidad desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false; // Si es divisible, no es primo
      }
    }
    
    return true; // Si no fue divisible por ningún número, es primo
  }
  
  console.log(esPrimo(7)); // Debería imprimir true
  console.log(esPrimo(12));

  //-------------------------------------------------------------------------------//
  
