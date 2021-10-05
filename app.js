const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function numberPic() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      

while (this.secretNum !== this.prevGuesses [this.prevGuesses.length - 1]) {
  this.prevGuesses.push(this.getGuesses()) 
  this.render()
  }
} 
,
getGuesses: function(){
  let guess 

while (isNaN(guess) || guess < this.smalletNum || guess > this.bigggestNum) {
  guess = parsInt(prompt(`Enter a guess betwen ${this.smallesNum} and ${this.biggestNum}`))
  }
}


}
