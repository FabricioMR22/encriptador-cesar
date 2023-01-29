//Generando el diccionario usando los codigos ACCIS, utilizando la posicion del array
const Dictionary = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 97)
);
//Para el diccionario en español agregamos la ñ
Dictionary.splice(14, 0, "ñ");

function encrip(str, rot, isEncrip) {
  //Limite del diccionario
  const limit = Dictionary.length;

  //recorrido de letra por letra
  str = str.split("").map((char) => {
    //posicion de la letra por letra
    const position = Dictionary.indexOf(char, 0);
    //calculo de nueva posicion dependiendo de isEncrip
    const newPosition =
      (isEncrip ? position + rot : position - rot + limit) % limit;
    //iteracion de la suma o resta depende de isEncrip
    return Dictionary[newPosition];
  });
  return str.join("");
}

export { encrip };
