const Elevator = require('./elevator.js');
const Person = require('./person.js');

let person = new Person('Ana', 2, 8)
let person2 = new Person('Fer', 4, 2)
let elevator = new Elevator ()
elevator.start();
// let run = setTimeOut( ()=> elevator.stop(), 1000);
// elevator.call();

elevator.call(person);
elevator.call(person2);
