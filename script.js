class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }


    getMake() {
        return this.make;
    }


    setMake(make) {
        this.make = make;
    }

    getModel() {
        return this.model;
    }

    setModel(model) {
        this.model = model;
    }

    getYear() {
        return this.year;
    }

    setYear(year) {
        this.year = year;
    }

    info_display() {
        return `Year: ${this.year} Make: ${this.make} Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, passengerCapacity, weight, length) {
      super(make, model, year);
      this.passengerCapacity = passengerCapacity;
      this.weight = weight; 
      this.length = length; 
    }
  
    getPassengerCapacity() {
      return this.passengerCapacity;
    }
  
    setPassengerCapacity(passengerCapacity) {
      this.passengerCapacity = passengerCapacity;
    }

    getweight() {
        return this.weight;
      }
    
    setweight(weight) {
        this.weight = weight;
    }

    getlength() {
     return this.length;
    }

    setlength(length) {
        this.length = length;
    }
  
    info_display() {
      return `${super.info_display()}  Passenger Capacity: ${this.passengerCapacity}  Length: ${this.length}m  Weight: ${this.weight}kg`;
    }
}

class Truck extends Vehicle {
    constructor(make, model, year, cargoCapacity, length, weight) {
      super(make, model, year);
      this.cargoCapacity = cargoCapacity;
      this.weight = weight; 
      this.length = length; 
    }
  
    getCargoCapacity() {
      return this.cargoCapacity;
    }
  
    setCargoCapacity(cargoCapacity) {
      this.cargoCapacity = cargoCapacity;
    }

    getweight() {
        return this.weight;
      }
    
    setweight(weight) {
        this.weight = weight;
    }

    getlength() {
     return this.length;
    }

    setlength(length) {
        this.length = length;
    }
  
    info_display() {
      return `${super.info_display()}  Cargo Capacity: ${this.cargoCapacity}kg  Length: ${this.length}m  Weight: ${this.weight}kg`;
    }
}

function toggleFields() {
    const type = document.getElementById("type").value;
    if (type === "car") {
      document.getElementById("car-fields").style.display = "block";
      document.getElementById("truck-fields").style.display = "none";
    } else{
      document.getElementById("car-fields").style.display = "none";
      document.getElementById("truck-fields").style.display = "block";
    }
}

let inventory=[]

function addVehicle() {
    const type = document.getElementById("type").value;
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const year = parseInt(document.getElementById("year").value, 10);
  
    let vehicle;
  
    if (type === "car") {
      const passengerCapacity = parseInt(document.getElementById("passengerCapacity").value, 10);
      const car_length = parseInt(document.getElementById("car_length").value,10);
      const car_weight = parseInt(document.getElementById("car_weight").value, 10);
      vehicle = new Car(make, model, year, passengerCapacity, car_length, car_weight);
      
    } else if (type === "truck") {
      const cargoCapacity = parseInt(document.getElementById("cargoCapacity").value, 10);
      const cargo_length = parseInt(document.getElementById("cargo_length").value, 10);
      const cargo_weight = parseInt(document.getElementById("car_weight").value, 10);
      vehicle = new Truck(make, model, year, cargoCapacity, cargo_length, cargo_weight);
    }
    
  
    if (inventory.length < 10) {
      inventory.push(vehicle);
      updateInventoryDisplay();
    } else {
      alert("Inventory is full!");
    }
  }
  


function clearInventory() {
  if (inventory.length === 0) {
    alert("The inventory is already empty!");
    return;
  }
  inventory.length = 0;
  updateInventoryDisplay();
  alert("Inventory has been cleared!");
}


function updateInventoryDisplay() {
  const inventoryList = document.getElementById("inventory-list");
  inventoryList.innerHTML = "";
  inventory.forEach((vehicle, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${vehicle.info_display()}`;
    inventoryList.appendChild(listItem);
  });
}



const car = new Car("Ford", "F-150", 2022, 4, 6, 100);
console.log(car.info_display());
console.log("Passenger Capacity:", car.getPassengerCapacity());
console.log("Year:", car.getYear());

car.setPassengerCapacity(5);
car.setYear(2021);
console.log("Updated Cargo Capacity:", car.getPassengerCapacity());
console.log("Updated Has Trailer:", car.getYear());
console.log(car.info_display());