class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers= [];
    this.direction = "up";
  }

  start() {
  this.interval = setInterval( ()=> {
    this.update();
  }, 1000);
}

  stop() {
  clearInterval(this.interval);
}
  update() {
    if (this.floor < this.MAXFLOOR && this.direction == 'up') {
      this.floorUp();
    } else if (this.floor > 0 && this.direction == 'down'){
      this.floorDown();
    }
    this.log()
    this._passengersEnter();
    this._passengersLeave();
  }
  _passengersEnter(person) {
    if (person.originFloor && this.waitingList.length > 0) {
      this.passenger.push(person.name);
      this.waitingList.splice(person.name);
      this.requests.push(person.destinationFloor);
      console.log (person.name  +  "has entered the elevator")
    }
  }
  _passengersLeave(person) {
    if(person.destinationFloor == this.floor){
      this.passenger.splice(person);
      console.log (person.name  +  "has left the elevator");
    }
  }

  floorUp() {
    this.floor++
    this.direction = 'up';
    if(this.floor == 10) this.direction = 'down'
    //quien esta como originFloor o destinationFloor
    if (this.floor== person.originFloor {
      this._passengersEnter
    } else if  (this.floor == person.destinationFloor) {
      this._passengersLeave
    }
   }

  floorDown() {
    this.floor--
    this.direction = 'down';
      if(this.floor == 0) {this.direction = 'up'}
      //quien esta como originFloor o destinationFloor
      if (this.floor== person.originFloor || this.floor ==person.destinationFloor) {

      }
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(`direction: ${this.direction}  floor: ${this.floor}`)
 }
}

module.exports = Elevator;
