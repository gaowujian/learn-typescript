// 基础类型
const isBoolean: boolean = true;
const str: string = "str";
const num: number = 123;
const nullValue: null = null;
const undefinedValue: undefined = undefined;

// null和undefined是其他类型的子集
const str1: string = null;
const num1: number = undefined;

// any类型
const anyValue1: any = 1;
const anyValue2: any = "string";
const anyValue3: any = true;
const anyValue4: any = null;

// union type 联合类型
// usage: 使用 | 符号进行链接

const uniValue1: string | number = "string";
const uniValue2: string | number = 123;

// array数组 类型一样的元素集合
const array1: number[] = [123, 232];
const array2: string[] = ["aaa", "bbb"];
const array3: (string | number)[] = ["aaa", 112];

// tuple 类型不一样的元素集合
const tuple1: [number, string] = [123, "string"];

// any在数组中的使用
const anyArray: any[] = [123, "str", true];

// 接口，用来定义对象的类型，在js中万物皆对象，不关是基础类型还是object（function，array，date）等全部可以用interface描述

// 定义普通对象类型
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: "Tom",
  age: 25,
};

// 定义函数类型
interface IFunction {
  (x: number, y: number): number;
}

const fn: IFunction = (a, b) => {
  return a + b;
};

// 接口中的各种属性
// 只读属性使用 readonly关键字
// 可选属性使用  ?:来表示
// 任意属性使用 [propName:类型]  值必须是其他所有类型的uni 否则报错
interface IPerson {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tony: IPerson = {
  id: 123,
  name: "Tom",
  age: 25,
  gender: "male",
};

// 数组类型的定义，两种表示法
// 1. 类型 + 方括号
let fibonacci1: number[] = [1, 1, 2, 3, 5];
// 2. 数组泛型
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];
// 3.接口表示数组, 数组也是对象，interface可以描述对象，这种方式比较复杂，不过一般用来表示类数组
// [1,1,2,3] 可以理解为 {0:1,1:1,2:2,3:3} 这就是一个任意属性
interface NumberArray {
  [index: number]: number;
}

let fibonacci3: NumberArray = [1, 1, 2, 3, 5];

// An index signature parameter type must be either 'string' or 'number'.
interface NumberArray2 {
  [index: number]: number;
}

let fibonacci4: NumberArray2 = { 0: 1, 1: 1, 2: 2 };

// 类数组表示法，常用的类数组都有自己的接口，如 IArguments, NodeList, HTMLCollection 等：
function sum() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}

// 函数定义，javascript中的两种方式：声明式 和 函数表达式

// 函数声明（Function Declaration）
function sum1(x, y) {
  return x + y;
}

function sum1_typescript(x: number, y: number): number {
  return x + y;
}

// 函数表达式（Function Expression）
let sum2 = function (x, y) {
  return x + y;
};
// 这种方式只是对右边的匿名函数做了类型约束，对于左侧变量的类型，实际上是从类型导论中推导出来的
let sum2_typescript1 = function (x: number, y: number): number {
  return x + y;
};
// 正确的方式如下
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// * 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let sum2_typescript2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// 使用接口来定义函数需要的形状，可选参数使用 ？，含默认值参数使用 key: type = value,  e.g. source:number=10
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};

// 类型断言  type assertion  手动执行一个类型的值
// usage：  值 as 类型  （推荐）  或者  <类型>值

// 主要用途
// 1. 把联合类型断言为某一种类型
// 2. 把一个父类断言为一个更加具体的子类
// 3. 把任意一个类型断言为any
// 4. 把any断言为任意类型

// Typescript 中的内置类型

// 1. ecmascript提供了Boolean、Error、Date、RegExp 等。
// 2. DOM 和 BOM 提供了Document、HTMLElement、Event、NodeList等

// 使用类型别名 type, 多用于联合类型的, 给类型起别名，包括基础类型，联合类型，函数类型，interface等

type Name = string;
type NameResolver = (source: string, subString: string) => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n("str1", "str2");
  }
}

// 除了interface，我们也可以用type关键字给function类型起名字

// 定义一个函数
// const SearchFunc2 = (source: string, subString: string) => boolean;

// 给函数起别名
type SearchFunc2 = (source: string, subString: string) => boolean;
let mySearch2: SearchFunc2;
mySearch2 = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};

// 字符串字面量类型用来约束取值只能是某几个字符串中的一个。
// usage 也是通过type关键字实现

type EventNames = "click" | "scroll" | "mousemove";
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

export {};
