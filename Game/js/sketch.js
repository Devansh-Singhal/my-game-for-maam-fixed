    var ground;
    var mountain;
    var player;
    function preload(){

    }
    function setup(){
    createCanvas(900,700);
    ground=createSprite(450,700,900,90)
    mountain=createSprite(10,10,10,10);

    player = createSprite(300,150,100,100);
    player=loadImage("images/run1")
    }
    function draw(){
        background(0);

        if (keyDown("space")) {
            player.velocityY = -15;
        }
        player.velocityY = player.velocityY + 1;
    if(keyCode == 37){
    player.velocityX=  player.x=player.x-15;
    }
    function spawnhelicopter(){

    }

    drawSprites();
    textSize(20);
    fill("red");
    text(mouseX + "," + mouseY, mouseX, mouseY);





    }