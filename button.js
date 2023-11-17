class buttonClass {
    constructor(text, x, y, colour) {
      this.text = text;
      this.x = x;
      this.y = y;
      this.colour = colour;
  
      // Create the button in the constructor
      this.button = createButton(this.text);
      this.button.position(this.x, this.y);
      this.button.style('font-size', '16px');
      this.button.style('border-color', 'white');
      this.button.style('font-family', 'Helvetica');
      this.button.style('box-shadow', 'none');
      this.button.style('color', this.colour);
      this.button.style('background', 'black');
      this.button.style('padding', '10px 30px');
      this.button.style('display', 'none');
    }
  
    // Method to return the button
    returnButton() {
      return this.button;
    }
  
    // Method to hide the button
    hideButton() {
        this.button.style('display', 'none');
    }
  }