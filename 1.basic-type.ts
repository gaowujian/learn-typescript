namespace basicType {
  // 1. boolean
  let isBoolean: boolean = true;
  // 2. number
  let num: number = 10;
  // 3. string
  let str: string = "greeting";
  // 4. Array
  let arr: number[] = [1, 2, 3];
  // 5. Tuple
  let tup: [number, string] = [10, "str"];
  // 6. Enum (需要使用enum关键字)
  enum Direction {
    Up,
    Down,
  }
  //   7. Unknown (用来表示在编写程序时尚不清楚的类型, unknown不能使用.来访问属性，any可以)
  let notSure: unknown = 4;
  notSure = "maybe a string instead";
  //   notSure.name = "tony";
  //   8. any 任意类型，可以访问任意属性，ts不做检查
  let val: any = "str";
  val.name = "tony";
  //   9.void 类似于any，any表示接受任意类型，而void表示任意值的缺失,主要用来给表明函数没有返回值
  //   可以接受 return; return null;和 return undefined
  //   指定变量为void类型没有意义，因为该变量只能为 null 或者 undefined
  function warnUser(): void {
    console.log("This is my warning message");
  }
  var nullVal: void = null;
  //   10.null 和 undefined
  //   是任意类型值的基础类型，包括void，unknown，在 --strictNullChecks未开启的状态下，
  //   可以把null或者undefined赋值给任意类型变量
  var nullVal2: number = null;
  // 11. object
  // object表示该类型不是基础类型，即不是number,string,boolean,bigint,symbol,null和undefined的其他类型
  // 一般来说不会使用该类型
  // 12. 类型断言，当你确认你对该类型的了解比ts检查器更好的时候
  // <>语法
  let someValue1: unknown = "this is a string";
  let strLength1: number = (<string>someValue1).length;
  // as语法
  let someValue2: unknown = "this is a string";
  let strLength2: number = (someValue2 as string).length;
}
