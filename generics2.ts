// args上不一定会有length属性
// function echoWithArray<T>(args: T) {
//   console.log(args.length);
//   return args;
// }

// 1. 解决方案一,让参数变成一个泛型T的数组，但是这个解决方案有一个缺陷是不单单是数组有length属性，我们的object和string都有这个属性

// function echoWithArray<T>(args: T[]) {
//   console.log(args.length);
//   return args;
// }

// const result = echoWithArray([1, 23]);
// // 不支持string和其他含length的类型
// const result2 = echoWithArray([1, 23]);

// 2. 解决方案二，泛型约束 在泛型中使用extends关键字

interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(args: T) {
  console.log(args.length);
  return args;
}

const result1 = echoWithLength([1, 23]);
const result2 = echoWithLength("string");
// 错误实例
// const result3 = echoWithLength(true);

export {};
