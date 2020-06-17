interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus(): void;
}

// 接口也可以实现继承

interface RadioWithBatteryStatus extends Radio {
  checkBatteryStatus(): void;
}

class Car implements Radio {
  constructor() {}
  switchRadio() {
    console.log("car is switching radio");
  }
}

class CellPhone implements Radio, Battery {
  constructor() {}
  switchRadio() {
    console.log("cellphone is switching radio");
  }
  checkBatteryStatus() {
    console.log("cellphone is checking battery status");
  }
}

class Computer implements RadioWithBatteryStatus {
  constructor() {}
  switchRadio() {
    console.log("Computer is switching radio");
  }
  checkBatteryStatus() {
    console.log("Computer is checking battery status");
  }
}

const car = new Car();
const phone = new CellPhone();
const computer = new Computer();
car.switchRadio();
phone.switchRadio();
computer.switchRadio();
phone.checkBatteryStatus();
computer.checkBatteryStatus();
