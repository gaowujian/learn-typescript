// 泛型可以应用在函数，类和接口上

// 这个时候在typescript中显示正确，没有捕捉到异常

// class Queue {
//   private data = [];
//   constructor() {}
//   push(item) {
//     return this.data.push(item);
//   }
//   pop() {
//     return this.data.pop();
//   }
// }

// const queue = new Queue();
// queue.push(1);
// queue.push("ddd");

// console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed());

// 1. 解决方案一：在push 和pop中显式指定传入和传出数据类型,
// 这个时候，我们在写代码的时候就可以知道错误，但是不解决根本，我们的需求是传入什么类型就返回什么类型，而不是定死的

// class Queue {
//   private data = [];
//   constructor() {}
//   push(item: number) {
//     return this.data.push(item);
//   }
//   pop(): number {
//     return this.data.pop();
//   }
// }

// const queue = new Queue();
// queue.push(1);
// queue.push("ddd");

// console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed());

// 2. 解决方案二

class Queue<T> {
  private data: T[];
  constructor() {}
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.pop();
  }
}

const queue = new Queue<number>();
queue.push(1.2);
console.log(queue.pop().toFixed(0));

// 在interface上去使用泛型

interface KeyPairs<T, U> {
  key: T;
  value: U;
}

const obj1: KeyPairs<string, number> = { key: "str", value: 10 };
const obj2: KeyPairs<number, string> = { key: 10, value: "20" };

// 设置一个number数组的两种方式
// interface 搭配泛型
const numArr1: number[] = [1, 2, 3];
const numArr2: Array<number> = [1, 2, 3];

// 使用interface来描述函数

interface IPlus<T> {
  (a: T, b: T): T;
}
function plus(a: number, b: number): number {
  return a + b;
}

function connect(a: string, b: string): string {
  return a + b;
}

// a 和 b现在可以共享一个接口
const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
