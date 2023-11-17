let ball, map1;
let firstscreen;
let tvwatched=0;
let bookread=0;
energy = 90;
maxenergy = 100;
let firstsprite = 0;
let pianoButton;
startedplaying = 0;
let screen = 3;
let button;
let pianoTime = false;
let pianoShown = false;
let elapsedTime;
let startTime;
let soundPlayedA = false;
let soundPlayedS = false;
let soundPlayedD = false;
let soundPlayedF = false;
let soundPlayedG = false;
let soundPlayedH = false;
let soundPlayedJ = false;
let soundPlayedK = false;
let soundPlayedL = false;
let soundPlayedL2 = false;
let soundPlayedL3 = false;
let soundPlayedW = false;
let soundPlayedE = false;
let soundPlayedT = false;
let soundPlayedY = false;
let soundPlayedU = false;
let whiteKeysText = ``;
let pianoShow = 0;
let octave = 4;
selectedsong = 0;
let gamestarted = 0;
let value = 0;
let score = 0;
let text1 = '';
let firstTime = 0;
gameshow = 0;

function preload(){
  font = loadFont('assets/PublicPixel.ttf');
  img = loadImage('assets/MAINGAMESCREEN.jpg');
  firstscreen = loadImage('assets/firstscreen.jpg');
}
function setup() {
  frameRate(120);
  createCanvas(windowWidth, windowHeight);
  makeMap = new mapSprite(400,20);
  ball = makeMap.ballBack();
  map1 = makeMap.mapBack();
  player2 = new Sprite();
  player2.diameter = 20;
  player2.x = ball.x+50;
  player2.y = ball.y+50;
  player2.collider = 'none';
  pianoButton = new buttonClass('Exit Game', 200, 200, 'white');
  wishyouwerehere = loadSound('songs/wish-you-were-here.mp3');
  comfortablynumb = loadSound('songs/song2.mp3');
  pianoicon = new Sprite();
  pianoicon.collider = 'static';
  pianoicon.width = 250;
  pianoicon.img = 'assets/piano-icon.png';
  pianoicon.scale = 0.35;
  pianoicon.x = 1160;
  pianoicon.y = 220;

  tvicon = new Sprite();
  tvicon.collider = 'static';
  tvicon.width = 250;
  tvicon.img = 'assets/tv-icon.png';
  tvicon.scale = 0.3;
  tvicon.x = 350;
  tvicon.y = 310;

  bookicon = new Sprite();
  bookicon.collider = 'static';
  bookicon.width = 250;
  bookicon.img = 'assets/book-icon.png';
  bookicon.scale = 0.3;
  bookicon.x = 750;
  bookicon.y = 380;

  pencilicon = new Sprite();
  pencilicon.collider = 'static';
  pencilicon.width = 250;
  pencilicon.img = 'assets/pencil-icon.png';
  pencilicon.scale = 0.3;
  pencilicon.x = 1160;
  pencilicon.y = 600;

}
function updateenergy(energy,maxenergy){
  push();
  stroke(0);
  strokeWeight(4);
  pop();
  noFill();
  rect(windowWidth-250,30,200,15);
  push();
  noStroke();
  fill(255,255,255);
  rect(windowWidth-249,31, map(energy, 0, maxenergy, 0, 200), 13);
  pop();
  
}
function draw() {
  if(energy==0){
    screen=4;
  }
  switch (screen) {
    case 0:
      maingame();
      break;
    case 1:
      pianoplaying();
      break;
    case 2:
      drawinggame();
      break;
    case 3:
      startingscreen();
      break;
    case 4:
      gameover();
      break;
  }
}
function keyPressed() {
  if (key === 'z' || key === 'Z') {
    if(octave>1)
    {
      octave-=1;
    }
  }
  if (key === 'x' || key === 'X') {
    if(octave<6)
    {
      octave+=1;
    }
  }
  

if(pianoTime===true)
{
  A = new Audio("sounds/C"+octave+".mp3");
  S = new Audio("sounds/D"+octave+".mp3");
  D = new Audio("sounds/E"+octave+".mp3");
  F = new Audio("sounds/F"+octave+".mp3");
  G = new Audio("sounds/G"+octave+".mp3");
  H = new Audio("sounds/A"+octave+".mp3");
  J = new Audio("sounds/B"+octave+".mp3");
  K = new Audio("sounds/C"+(int(octave)+1)+".mp3");
  L = new Audio("sounds/D"+(int(octave)+1)+".mp3");
  L2 = new Audio("sounds/E"+(int(octave)+1)+".mp3");
  L3 = new Audio("sounds/F"+(int(octave)+1)+".mp3");
  W = new Audio("sounds/Db"+octave+".mp3");
  E = new Audio("sounds/Eb"+octave+".mp3");
  T = new Audio("sounds/Gb"+octave+".mp3");
  Y = new Audio("sounds/Ab"+octave+".mp3");
  U = new Audio("sounds/Bb"+octave+".mp3");
  O = new Audio("sounds/Db"+(int(octave)+1)+".mp3");
  P = new Audio("sounds/Eb"+(int(octave)+1)+".mp3");
  soundPlayedA = false;
  soundPlayedS = false;
  soundPlayedD = false;
  soundPlayedF = false;
  soundPlayedG = false;
  soundPlayedH = false;
  soundPlayedJ = false;
  soundPlayedK = false;
  soundPlayedL = false;
  soundPlayedL2 = false;
  soundPlayedL3 = false;
  soundPlayedW = false;
  soundPlayedE = false;
  soundPlayedT = false;
  soundPlayedY = false;
  soundPlayedU = false;
  soundPlayedO = false;
  soundPlayedP = false;
  if (key === 'a' || key === 'A') {
    if (!soundPlayedA) {
      A.play();
      soundPlayedA = true;
      
    }
  } else if (key === 's' || key === 'S') {
    if (!soundPlayedS) {
      S.play();
      soundPlayedS = true;
    }
  }else if (key === 'd' || key === 'D') {
    if (!soundPlayedD) {
      D.play();
      soundPlayedD = true;
    }
  }else if (key === 'f' || key === 'F') {
    if (!soundPlayedF) {
      F.play();
      soundPlayedF = true;
    }
  }
  else if (key === 'g' || key === 'G') {
    if (!soundPlayedG) {
      G.play();
      soundPlayedG = true;
    }
  }
  else if (key === 'h' || key === 'H') {
    if (!soundPlayedH) {
      H.play();
      soundPlayedH = true;
    }
  }
  else if (key === 'j' || key === 'J') {
    if (!soundPlayedJ) {
      J.play();
      soundPlayedJ = true;
    }
  }
  else if (key === 'k' || key === 'K') {
    if (!soundPlayedK) {
      K.play();
      soundPlayedK = true;
    }
  }
  else if (key === 'l' || key === 'L') {
    if (!soundPlayedL) {
      L.play();
      soundPlayedL = true;
    }
  }
  else if (key === ';' || key === ':') {
    if (!soundPlayedL2) {
      L2.play();
      soundPlayedL2 = true;
    }
  }
  else if (key === '"' || key === "'") {
    if (!soundPlayedL3) {
      L3.play();
      soundPlayedL3 = true;
    }
  }
  else if (key === 'w' || key === 'W') {
    if (!soundPlayedW) {
      W.play();
      soundPlayedW = true;
    }
  }
  else if (key === 'e' || key === 'E') {
    if (!soundPlayedE) {
      E.play();
      soundPlayedE = true;
    }
  }
  else if (key === 't' || key === 'T') {
    if (!soundPlayedT) {
      T.play();
      soundPlayedT = true;
    }
  }
  else if (key === 'y' || key === 'Y') {
    if (!soundPlayedY) {
      Y.play();
      soundPlayedY = true;
    }
  }
  else if (key === 'u' || key === 'U') {
    if (!soundPlayedU) {
      U.play();
      soundPlayedU = true;
    }
  }
  else if (key === 'o' || key === 'O') {
    if (!soundPlayedO) {
      O.play();
      soundPlayedO = true;
    }
  }
  else if (key === 'p' || key === 'P') {
    if (!soundPlayedP) {
      P.play();
      soundPlayedP = true;
    }
  }
}
}
function maingame() {
  let distance = dist(ball.x, ball.y, player2.x, player2.y);

if (distance > 40) {
	player2.direction = player2.angleTo(ball);
	player2.speed = 3;
} else if (distance < 40) {
	player2.speed = 0;
}
  if(ball.collided(tvicon))
  {
    if(tvwatched<2){
      energy = energy-10;
    }
    tvwatched+=1;
  }

  if(ball.collided(bookicon))
  {
    if(bookread<2){
      energy = energy-10;
    }
    bookread+=1;
  }
  background(238,33,52);
  push();
  textSize(12);
  fill('black');
  text('energy:'+energy,windowWidth-200,70);
  pop();
  textFont(font);
  textSize(25);
  if (ball.collides(pianoicon)) {
    if(energy>30)
    {
      energy = energy - 20;
    } 
    else(energy=0);
    pianoicon.remove();
    pencilicon.remove();
    bookicon.remove();
    player2.remove();
    tvicon.remove();
		screen = 1;
    ball.remove();
    map1.remove();
	}
  if (ball.collides(pencilicon)) {
    if(energy>30)
    {
      energy = energy - 20;
    } 
    else(energy=0);
    pianoicon.remove();
    pencilicon.remove();
    bookicon.remove();
    player2.remove();
    tvicon.remove();
    ball.remove();
    map1.remove();
    screen = 2;
	}
  updateenergy(energy,maxenergy);
  if (kb.pressing('left'))
    ball.vel.x = -5;
  else if (kb.pressing('right')) ball.vel.x = 5;
  else ball.vel.x = 0;
  if (kb.pressing('up'))
    ball.vel.y = -5;
  else if (kb.pressing('down')) ball.vel.y = 5;
  else ball.vel.y = 0;
}

function pianoplaying() {
    background(238,33,52);
    updateenergy(energy,maxenergy);
    fill('black');
    text('energy:'+energy,windowWidth-200,70);
    textFont(font);
    textSize(12);
    text('octave:'+octave,75,windowHeight-40);
    textFont(font);
    textSize(12);
    if(pianoShow==0)
    {
      let smileText = `
      .............bbbbbbbbb
      ....bbbyyyyyyyyyb
      ...byyyyyyyyyyyyyb
      ..byyyyyyyyyyyyyyyb
      .byyyyyyyyyyyyyyyyb
      .byyyyyyyyyyyyyyyyb
      .byyyyyyyyyyyyyyyyybbb
      byyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      byyyyyyyyyyyyyyyyyyyyyyb
      `;
      let palette = {
        b: color('#181818'),
        y: color('#050606'),
        r: color('#FF2134'),
        z: color('#dddddd')
      };

        smiley = new Sprite();
        smiley.img = spriteArt(smileText, 25,palette);
        pianoShow=1;
        smiley.y=windowHeight-220;

      whiteKeysText = `
      ......wwbbzbbwwzzbbwbbzbbwwzzbbwbbzzwww
      wwbbzbbwwzzbbwbbzbbwwzzbbwbbzzwww
      wwbbzbbwwzzbbwbbzbbwwzzbbwbbzzwww
      wwbbzbbwwzzbbwbbzbbwwzzbbwbbzzwww
      wwbbzbbwwzzbbwbbzbbwwzzbbwbbzzwww
      wwbbzbbwwzzbbwbbzbbwwzzbbwbbzzwww
      wwbbzbbwwzzbbwbbzbbwwzzbbwbbzzwww
      wwwzzzwwwzzzwwwzzzwwwzzzwwwzzzwww
      wwwzzzwwwzzzwwwzzzwwwzzzwwwzzzwww
      `;

      pianoKeys = new Sprite();
      pianoKeys.img = spriteArt(whiteKeysText,16,palette);
      pianoKeys.y = windowHeight-70;
      pianoKeys.x = 745;
      pianoKeys.overlaps(smiley);
  
      octavebuttons = new Sprite();
      octavebuttons.img = 'assets/octavebuttons.png';
      octavebuttons.scale = 0.5;
      octavebuttons.x = 125;
      octavebuttons.y = windowHeight-100;

      exitJambutton = new Sprite();
      exitJambutton.width = 250;
      exitJambutton.img = 'assets/button-exit-jam.png';
      exitJambutton.scale = 0.5;
      exitJambutton.x = 125;
      exitJambutton.y = 50;

      song1 = new Sprite(235,100);
      song1.width = 320;
      song1.height = 30;
      song1.text = "wish you were here";
      song1.stroke = color(238,33,52);
      song1.textFont = font;
      song1.textSize = 20;
      song1.color = color(238,33,52);
      push();
      stroke('')
      song1.strokeWeight = 0;
      pop();
      song1.textColor = 'black';

      song2 = new Sprite(184,140);
      song2.width = 320;
      song2.height = 30;
      song2.text = "say something";
      song2.stroke = color(238,33,52);
      song2.textFont = font;
      song2.textSize = 20;
      song2.color = color(238,33,52);
      push();
      song2.strokeWeight = 0;
      pop();
      song2.textColor = 'black';

    }


      if(song1.mouse.presses()){
        if(wishyouwerehere.isPlaying())
        {
          wishyouwerehere.stop();
          song1.textColor = 'black';
        }
        else{
          song1.textColor = '#40403f';
          wishyouwerehere.play();
          wishyouwerehere.setVolume(0.2);
          comfortablynumb.stop();
          song2.textColor = 'black';
        }
      }
      if(song2.mouse.presses()){
        if(comfortablynumb.isPlaying()){
          comfortablynumb.stop();
          song2.textColor = 'black';
        }
        else{
        wishyouwerehere.stop();
        comfortablynumb.play();
        comfortablynumb.setVolume(0.2);
        song2.textColor = '#40403f';
        song1.textColor = 'black';
        }
    }
      

      if (exitJambutton.mouse.pressing())
      {
        exitGame();
        pianoShow = 0;
        exitJambutton.remove();
        octavebuttons.remove();
        wishyouwerehere.stop();
        comfortablynumb.stop();
        song1.remove();
        song2.remove();
        pianoKeys.remove();
        smiley.remove();
      }

    pianoTime = true;
    function exitGame() {
      pianoTime = false;
      screen = 0;
      pianoShown = false;
      makeMap = new mapSprite(400,20);
      ball = makeMap.ballBack();
      map1 = makeMap.mapBack();
      pianoButton.hideButton();
      pianoicon = new Sprite();
      pianoicon.collider = 'static';
      pianoicon.width = 250;
      pianoicon.img = 'assets/piano-icon.png';
      pianoicon.scale = 0.35;
      pianoicon.x = 1160;
      pianoicon.y = 220;
    
      tvicon = new Sprite();
      tvicon.collider = 'static';
      tvicon.width = 250;
      tvicon.img = 'assets/tv-icon.png';
      tvicon.scale = 0.3;
      tvicon.x = 350;
      tvicon.y = 310;
    
      bookicon = new Sprite();
      bookicon.collider = 'static';
      bookicon.width = 250;
      bookicon.img = 'assets/book-icon.png';
      bookicon.scale = 0.3;
      bookicon.x = 750;
      bookicon.y = 380;

      player2 = new Sprite();
  player2.diameter = 20;
  player2.x = ball.x+50;
  player2.y = ball.y+50;
  player2.collider = 'dynamic';

  pencilicon = new Sprite();
      pencilicon.collider = 'static';
      pencilicon.width = 250;
      pencilicon.img = 'assets/pencil-icon.png';
      pencilicon.scale = 0.3;
      pencilicon.x = 1160;
      pencilicon.y = 600;



  }
}


function startingscreen(){
  map1.visible = false;
  ball.visible = false;
  player2.visible = false;
  tvicon.visible = false;
  bookicon.visible = false;
  pianoicon.visible = false;
  pencilicon.visible =false;
  image(firstscreen,0,0,windowWidth,windowHeight);
  if (mouseIsPressed === true){
    screen = 0;
    map1.visible = true;
  ball.visible = true;
  player2.visible = true;
  tvicon.visible = true;
  bookicon.visible = true;
  pianoicon.visible = true;
  pencilicon.visible = true;
  }
  
  }

  function gameover(){
    background(238,33,52);
    map1.visible = false;
    ball.visible = false;
    pencilicon.visible = false;
    bookicon.visible = false;
    player2.visible = false;
    pianoicon.visible = false;
    tvicon.visible = false;

    push();
    textSize(25);
    textFont(font);
    fill('black');
    text('GAME OVER',(windowWidth/2)-200,windowHeight/2);
    pop();
    pop();
  }

  function drawinggame(){
    if(gameshow==0){
      background(238,33,52);
      exitdrawingapp = new Sprite();
      exitdrawingapp.width = 250;
      exitdrawingapp.img = 'assets/exitbutton.png';
      exitdrawingapp.scale = 0.5;
      exitdrawingapp.x = 125;
      exitdrawingapp.y = 50;
      textFont(font);
      textSize(14);
      console.log(windowWidth/10);
      console.log(windowHeight);
      scoretext = new Sprite(windowWidth-150,60);
      scoretext.width = 320;
      scoretext.height = 30;
      scoretext.text = "score:"+score;
      scoretext.textFont = font;
      scoretext.textSize = 14;
      scoretext.color = color(238,33,52);
      scoretext.stroke = color(238,33,52);
      scoretext.textColor = 'black';
      push();
      fill('black');
      text('DRAW OVER THE SHAPE WITH THE MOUSE, PRESS R TO REFRESH',(windowWidth/2)-400,windowHeight-50);
      pop();
      strokeWeight(3);
      push();
      textSize(12);
      fill('black');
      text('energy:'+energy,windowWidth-200,70);
      pop();
      let centerX = width / 2;
      let centerY = height / 2;
      
      // Generate random coordinates relative to the center
      let x1 = random(-100, 100) + centerX;
      let y1 = random(-100, 100) + centerY;
      let x2 = random(-100, 100) + centerX;
      let y2 = random(-100, 100) + centerY;
      let x3 = random(-100, 100) + centerX;
      let y3 = random(-100, 100) + centerY;
      let x4 = random(-100, 100) + centerX;
      let y4 = random(-100, 100) + centerY;
      
      // Draw the lines
      line(x1, y1, x2, y2);
      line(x2, y2, x3, y3);
      line(x3, y3, x4, y4);
      gameshow=1;
      
    }
    if(exitdrawingapp.mouse.presses()){
      gameshow=0;
      screen=0;
      score=0;
      scoretext.remove();
      exitdrawingapp.remove();
      makeMap = new mapSprite(400,20);
      ball = makeMap.ballBack();
      map1 = makeMap.mapBack();
      pianoButton.hideButton();
      pianoicon = new Sprite();
      pianoicon.collider = 'static';
      pianoicon.width = 250;
      pianoicon.img = 'assets/piano-icon.png';
      pianoicon.scale = 0.35;
      pianoicon.x = 1160;
      pianoicon.y = 220;
    
      tvicon = new Sprite();
      tvicon.collider = 'static';
      tvicon.width = 250;
      tvicon.img = 'assets/tv-icon.png';
      tvicon.scale = 0.3;
      tvicon.x = 350;
      tvicon.y = 310;
    
      bookicon = new Sprite();
      bookicon.collider = 'static';
      bookicon.width = 250;
      bookicon.img = 'assets/book-icon.png';
      bookicon.scale = 0.3;
      bookicon.x = 750;
      bookicon.y = 380;

      player2 = new Sprite();
      player2.diameter = 20;
      player2.x = ball.x+50;
      player2.y = ball.y+50;
      player2.collider = 'dynamic';

      pencilicon = new Sprite();
      pencilicon.collider = 'static';
      pencilicon.width = 250;
      pencilicon.img = 'assets/pencil-icon.png';
      pencilicon.scale = 0.3;
      pencilicon.x = 1160;
      pencilicon.y = 600;

    }
    if (kb.presses('R')) {
          score=0;
          clear();
          background(238,33,52);
          push();
          fill('black');
          text('DRAW OVER THE SHAPE WITH THE MOUSE, PRESS R TO REFRESH',(windowWidth/2)-400,windowHeight-50);
          pop();
          scoretext.text = "score:"+score;
          let centerX = width / 2;
          let centerY = height / 2;
          
          // Generate random coordinates relative to the center
          let x1 = random(-100, 100) + centerX;
          let y1 = random(-100, 100) + centerY;
          let x2 = random(-100, 100) + centerX;
          let y2 = random(-100, 100) + centerY;
          let x3 = random(-100, 100) + centerX;
          let y3 = random(-100, 100) + centerY;
          let x4 = random(-100, 100) + centerX;
          let y4 = random(-100, 100) + centerY;
          
          // Draw the lines
          line(x1, y1, x2, y2);
          line(x2, y2, x3, y3);
          line(x3, y3, x4, y4);
    }
    if (mouseIsPressed === true)
    {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  function mouseReleased()
  {
    if(screen==2)
    {
    score+=1;
    text1=score;
    scoretext.text = "score:"+score;
    }
  } 