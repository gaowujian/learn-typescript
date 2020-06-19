// 函数声明
// function add(a: number, b: number, c?: number) {
//   return a + b + c;
// }

function add(a: number, b: number, c: number = 10): number {
  return a + b + c;
}

// 函数表达式, 函数的类型
const add2: (a: number, b: number, c?: number) => number = add;
