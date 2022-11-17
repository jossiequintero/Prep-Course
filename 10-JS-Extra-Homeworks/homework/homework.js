// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  // return Object.entries(objeto);
  const matriz = [];
  for (const key in objeto) {
    if (Object.hasOwnProperty.call(objeto, key)) {
      const element = objeto[key];
      matriz.push([key, element]);
    }
  }
  return matriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let caracteres = string.split('');
  let result = {};
  caracteres.forEach((char)=>{
    if(!(result.hasOwnProperty(char))){
      result[char] = 1;
    }
    else{
      result[char]++;
    }
  });
  return result;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let str = s.split('');
  //['s', 'o', 'y', 'H', 'E', 'N', 'R', 'Y'];
  let upper = [];
  let lower = [];
  
  let newStr = "";
  str.forEach((char)=>{
    if(char === char.toUpperCase()){
      upper.push(char);
    }
    else{
      lower.push(char);
    }
  });
  newStr = upper.join("") + lower.join("");
  return newStr
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let strSplit = str.split(" ");
  let strMirror = strSplit.map((item)=>{
    let str = item.split("");
    return str.reverse().join("");
  });
  return strMirror.join(" ");
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroStrOriginal = numero.toString();
  let numeroStr = numero.toString().split("").reverse().join("");
  return numeroStr == numeroStrOriginal ? "Es capicua" : "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const letras = ["a", "b", "c"];
  let cadenaA = cadena.split("");
  let newCadena = cadenaA.filter((char)=>!letras.includes(char));
  return newCadena.join("");
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a,b){
    if(a.length < b.length)return -1;
    if(a.length > b.length)return 1;
    return 0;
  });
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let newArray = [];
  
  if(arreglo1.length > arreglo2.length) {
   newArray = arreglo1.filter((item)=>{
      return arreglo2.includes(item);
    });
  }
  else{
    newArray = arreglo2.filter((item)=>{
      return arreglo1.includes(item);
    });
  }
  return newArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

