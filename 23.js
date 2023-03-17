// Create class Vehicle
// Initialize class with properties power, gasTank and mass in tones Calculate max speed by formula 0.84 * power / mass
// Create method getMaxSpeed that returns maxSpeed
// Calculate gas usage per km by formula maxSpeed / power
// Create method getGasUsage that returns gasUsage Create method startEngine that sets property started to true Create method stopEngine that sets property started to false Create method drive. This method receives 2 arguments speed and distance
// You cannot drive if started is false
// You cannot set speed more then maxSpeed and less then 0
// Update gas property corresponding to gasUsage Create method addGas adds gas to car by arg
// Argument must be bigger then zero
// You cannot pour more gas then gasTank
// Create method printInfo that prints in console all available information

// Create class Car
// Car should inherit from Vehicle
// Initialize Car with additional properties type and maxPassengerCount
// Examples of type SEDAN, MINIVAN, SPORTS CAR...
// Update method printInfo that prints in console all available information

// Create class Bus
// Bus should inherit from Car
// Create method updatePassengers that receives argument passengers and updates passengerCount to that number
// passengerCount cannot be more then maxPassengerCount and less then 0
// Update method printInfo that prints in console all available information

class Vehicle {
  constructor(power, gasTank, mass) {
    this.power = power;
    this.gasTank = gasTank;
    this.mass = mass;
    this.maxSpeed = this.maxSpeedFormula();
    this.gasUsage = this.gasUsageFormula();
  }
  magicNumber = 0.84;
  started = false;
  speed = 0;
  distance = 0;

  maxSpeedFormula = () => {
    return (this.magicNumber * this.power) / this.mass;
  };
  gasUsageFormula = () => {
    return this.maxSpeed / this.power;
  };

  getMaxSpeed = () => {
    return this.maxSpeed;
  };
  getGasUsage = () => {
    return this.gasUsage;
  };
  startEngine = () => {
    if (this.gasTank > 0) {
      this.started = true;
    }
    return this;
  };

  stopEngine = () => {
    this.started = false;
    return this;
  };
  drive = (speed, distance) => {
    if (this.started === false) {
      console.log("Please, start engine");
    }
    if (speed > this.maxSpeed && speed <= 0) {
      console.log("Please, check your speed");
    }
    const spent = distance * this.gasUsage; // gas, that we spend on 1 km
    if (spent >= this.gasTank) {
      console.log("Please, add gas");
    } else {
      this.updateGas(spent);
      this.speed = speed;
      this.distance = distance;
    }
    return this;
  };

  updateGas = (number) => {
    this.gasTank = this.gasTank - number;
    return this.gasTank;
  };

  addGas = (number) => {
    if (number > 0) {
      this.gasTank = number + this.gasTank;
    }

    return this.gasTank;
  };

  printInfo() {
    const info = {
      power: this.power,
      gasTank: this.gasTank,
      speed: this.speed,
      distance: this.distance,
      isStarted: this.started,
    };
    return info;
  }
}
const myVehicle = new Vehicle(220, 40, 2);
myVehicle.startEngine().drive(30, 30).addGas(5);

class Car extends Vehicle {
  constructor(type, maxPassengerCount, ...rest) {
    super(...rest);
    this.type = type;
    this.maxPassengerCount = maxPassengerCount;
  }
  printInfo() {
    const info = {
      power: this.power,
      gasTank: this.gasTank,
      speed: this.speed,
      distance: this.distance,
      isStarted: this.started,
      type: this.type,
      maxPassengerCount: this.maxPassengerCount,
    };
    return info;
  }
}
const myCar = new Car("SEDAN", 8, 220, 40, 2);

class Bus extends Car {
  constructor(...params) {
    super(...params);
  }
  passengerCount = 0;
  updatePassengers(passengers) {
    if (passengers > this.maxPassengerCount) {
      console.log("Your bus is too small for so many passengers");
    }
    if (passengers < 0) {
      console.log("You don't have the passengers");
    }
    this.passengerCount = passengers;
    return this;
  }
  printInfo() {
    const info = {
      power: this.power,
      gasTank: this.gasTank,
      speed: this.speed,
      distance: this.distance,
      isStarted: this.started,
      type: this.type,
      maxPassengerCount: this.maxPassengerCount,
      passengerCount: this.passengerCount,
    };
    return info;
  }
}
const myBus = new Bus("SEDAN", 8, 220, 40, 2);
//Bus
// (type, maxPasaangesr, power, gasTank, mass )
