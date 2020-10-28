namespace literalTypes {
  // 字面量类型
  // 在ts中有三种字面量类型 字符串字面量类型，数字字面量类型，和布尔值字面量类型
  // 当我们使用var或者let定义变量的时候，内容是可变的，但是const不存在变的可能

  //   右边值可变，所以hiWorld的类型是string
  let hiWorld = "Hi World";
  // 右边值不可变，所以helloWorld类型是 "Hello World",这种现象叫做 literal narrowing
  const helloWorld = "Hello World";

  type Easing = "ease-in" | "ease-out" | "ease-in-out";
  //   p的类型是Easing 而不是string，他的值不是所有的string值，而是Easing规定的三种string值中的一种
  let p: Easing = "ease-in";
}
