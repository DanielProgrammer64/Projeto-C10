//criando as variáveis
var sea,ship;
var seaImg,shipImg;
//carregando as imagens
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png")
             
}
//criando a área da tela e o cenário
function setup(){
  createCanvas(1350,600);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.7;


  //criando os sprites
  ship = createSprite(200,300,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale = 0.25;
  
}
//função para mostrar oque foi programado
function draw() {
  background(0);
  sea.velocityX = -3;

  
  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    // comando para desenhar na tela oque foi exigido pelo código
  drawSprites();
}
//objetivo concluído