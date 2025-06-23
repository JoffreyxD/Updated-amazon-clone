class Car {
#brand;
model;
speed = 0;
isTrunkOpen;

constructor(carDetails) {
  this.#brand = carDetails.brand;
  this.model = carDetails.model;
  
}

displayInfo() {
 console.log(`${this.#brand} ${this.model}, Speed: ${this.speed} km/h Trunk: ${this.isTrunkOpen}`);
}

go() {
  if(this.isTrunkOpen === 'Open'){
    console.log('trunk still open')
  }else {
     this.speed += 5 ;

  if (this.speed > 200) {
      this.speed = 200;
    }
  }

}

brake() {

 this.speed -= 5;
if (this.speed < 0) {
      this.speed = 0;
    }
}
 
openTrunk() {
  if(this.speed === 0) {
  this.isTrunkOpen = true;
    if(this.isTrunkOpen === true) {
      this.isTrunkOpen = 'Open';
    }
  }  
}

closeTrunk() {
  if(this.speed === 0)
  {
  this.isTrunkOpen = false;
    if(this.isTrunkOpen === false) {
      this.isTrunkOpen = 'Close';
    }
  } 
}

}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }
}

const car1 = new Car({
brand: 'Toyota', 
model: 'Corolla'
});

const car2 = new Car({
brand: 'Tesla', 
model: 'Model 3'
});

const raceCar = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

car1.openTrunk();
car1.displayInfo();
car1.closeTrunk();
car1.displayInfo();
car1.go();
car1.go();

car1.go()
car1.displayInfo();

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();