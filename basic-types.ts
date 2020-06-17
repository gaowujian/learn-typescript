// 定义原始数据类型，这里不介绍bigint和symbol的使用
let isDone: boolean = false;
let age: number = 23;
let message: string = "message sss";

let u: undefined = undefined;
let n: null = null;

// null 和 undefined是其他类型的子集，不会报错
let num: number = null;

// 当用户数据类型不确定的时候，有一个类型是any
// 这个时候不仅 notSure是any  属性值也全部是any，没有了类型检查的意义
let notSure: any = 4;

notSure = "jjee";
notSure.myName = "4422";

// 允许一部分类型值 uni types
let numberOrString: number | string = 123;
numberOrString = "zifuchuan";

// 数组, 不能存在数字外的其他类型，
let arryOfNumbers: number[] = [1, 2, 3];
arryOfNumbers.push(2443);

// 累数组， arraylike Object, arguments 默认是 IArguments
function test() {
  console.log(arguments);
}

// 元组 tuple 和数组非常类似， 可以被认为是合并了不同类型的数组，规定了数组类每个数据的类型，
// 不能多也不能少，且数据类型一直，起源于函数式编程

let user: [string, number] = ["viking", 2];
