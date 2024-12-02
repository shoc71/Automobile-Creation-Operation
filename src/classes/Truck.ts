// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow{
  // Declare properties of the Car class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Car class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = [new Wheel(), new Wheel(), new Wheel(), new Wheel()],
    towingCapacity: number,
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Car class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    if (typeof super.printDetails === "function") {
      super.printDetails();
    }

    // Print details of the Car class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    // Print details of the wheels
    this.wheels.forEach((wheel, index) => {
      console.log(
        `Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`
      );
    });
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`This truck can tow the ${vehicle.make} ${vehicle.model} (${vehicle.weight} lbs).`);
    } else {
      console.log(`Unable to tow ${vehicle.make} ${vehicle.model}. It exceeds the towing capacity of this truck.`);
    }
  }
}

// Export the Truck class as the default export
export default Truck;
