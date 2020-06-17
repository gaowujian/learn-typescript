// *一定范围内的常量 就需要使用enums

// * 默认是number值

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// console.log(Direction.Up);
// console.log(typeof Direction);

// *字符串枚举

// enum Direction {
//   Up = "Up",
//   Down = "Down",
//   Left = "Left",
//   Right = "Right",
// }

// console.log(Direction.Up);

// const value = "Up";
// if (value === Direction.Up) {
//   console.log("go up");
// }

// 常量枚举，可以用来提升性能
//  枚举 有两种： 常量枚举和 计算枚举， 只有常量枚举才能使用const enums 进行优化

const enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction.Up);

const value = "Up";
if (value === Direction.Up) {
  console.log("go up");
}
