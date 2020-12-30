//Create variables here
var dog,happyDog,foodS,foodStock;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale=0.1;
  
  database=firebase.database();

  foodStock=database.ref("Food").on("value",readStock);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(food){

  if(food<=0){
    food=0;
  }else{
    food-=1;
  }
  database.ref("/").update({
    Food:food
  })
}

function draw() {  
  background(color(46,139,87));
  if(keyWentDown("up")){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here

}



