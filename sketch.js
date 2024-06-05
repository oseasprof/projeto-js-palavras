let palavra;

function setup() {
  createCanvas(500, 400);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["(¬‿¬)", "(⌐■_■)", "ᕦ(ò_óˇ)ᕤ", "ヾ(⌐■_■)ノ♪", "(•_•)", "(★‿★) ","¯\_( ͡° ͜ʖ ͡°)_/¯"];
  
  return random(palavras);
}

function inicializaCores() {
  background("blue");
  fill("yellow");
  textSize(50);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 0, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let texto = palavraParcial(0, width);
    
  text(texto, 200, 200);
  
}

function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Você precisa ligar o modo escuro!");
  } else {
    console.log("Modo noturno não é necessário neste momento.");
  }
}

modoNoturno(15);
modoNoturno(20);