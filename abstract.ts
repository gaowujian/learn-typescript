abstract class Animal {
  name: string;
  constructor() {
    this.name = name;
  }
  abstract getName(): string;
}

class Pig extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const p = new Pig("猪");
console.log(p.getName());

/* 抽象类和接口的区别 */

// 1. 抽象类里面可以有方法的实现，但是接口完全都是抽象的，不存在方法的实现；
abstract class Animal1 {
  name: string;
  constructor() {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}
// 2. 子类只能继承一个抽象类，而接口可以被多个实现；
// 3. 抽象方法可以是public，protected，但是接口只能是public，默认的；
// 4. 抽象类可以有构造器，而接口不能有构造器；

export {};
