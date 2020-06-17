// 我们之前定义了原始数据类型，为了定义对象类型，我们引入了interface
// 1. 对象的形状shape进行描述
// 2. 面向对象的语言中，interface这个字段出现的很频繁，对类的抽象， 具体的功能交给类去实现 Duck Typing
// duck typing

interface IPerson {
  readonly id: number; //只读属性
  name: string;
  age?: number; //可选属性
}

const p: IPerson = { id: 1232, name: "tony", age: 28 };
