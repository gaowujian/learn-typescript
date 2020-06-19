// 我们有一个这样的需求，传入一个值，并返回该值，在过程当中我们丢失类型

// 1. 这种做法的的话，我们只能够传入number类型
// function echo(arg: number): number {
//   return arg;
// }

// const result = echo(13);

// 2. 使用any, 可能会有如下的bug，传入的是一个数字，返回值是any，但是我们可以给这个结果一个string类型
// function echo(arg: any) {
//   return arg;
// }

// const result: string = echo(13);

// 3. 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

// 使用泛型之前
// function echo(arg) {
//     return arg;
//   }
//   const result = echo("str");

// 使用泛型之后

function echo<T>(arg: T): T {
  return arg;
}

// 显式执行了传入的类型，也可以使用类型推论
// const str: string = "str";
// const result = echo(str);

// 类型推论
const result = echo("str");

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result1 = swap(["string", 123]);
result1[0]; //有number的方法
result1[1]; //有string的方法

export {};
