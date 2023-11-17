class mapSprite {
    constructor(ballY,ballSize) {
      this.map = new Sprite([
        [289, 245], [289, 645], [506, 645], [506, 559], [967, 559], [967, 656], [1222, 656],
        [1222, 160], [973, 160], [973, 326], [506, 326], [506, 245], [289, 245],
      ], 'static');
      this.map.color = 'white';
      this.map.strokeWeight = 5;
      
      this.ball = new Sprite();
      this.ballSize = ballSize;
      this.ballY = ballY;
      this.ball.diameter = this.ballSize;
      this.ball.y = this.ballY;
      this.ball.x = 400
    }
    ballBack(){
        return this.ball;
    }
    mapBack(){
        return this.map;
    }
  }