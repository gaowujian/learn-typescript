// 我们之前定义了原始数据类型，为了定义对象类型，我们引入了interface
// 1. 对象的形状shape进行描述
// 2. 面向对象的语言中，interface这个字段出现的很频繁，对类的抽象， 具体的功能交给类去实现 Duck Typing

// 1.描述形状,对象有哪些属性，属性是什么类型
interface IPerson {
  readonly id: number; //只读属性
  name: string;
  age?: number; //可选属性
}

const p: IPerson = { id: 1232, name: "tony", age: 28 };
// 2. 描述行为, 接口中不能使用abstract关键字,因为接口中只能放定义，不能放实现，所有方法都是抽象方法

// interface Eatable {
//   abstract eat(): void;
// }
interface Speakable {
  speak(): void;
}
interface Eatable {
  eat(): void;
}

// 类可以实现多个接口，但是只能继承一个父类
class Person implements Speakable, Eatable {
  constructor() {}
  eat() {
    console.log("eat");
  }
  speak() {
    console.log("speak");
  }
}

const p1 = new Person();
p1.eat();
