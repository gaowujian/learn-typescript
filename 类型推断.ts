// 类型推论：类型在哪里是如何被推断的

// 基础推断
// 1. 初始化变量和成员
// 2. 设置默认参数值
// 3. 决定函数返回值

//从多个表达式推断的时候，会推断一个兼容类型
// 最佳通用类型
let x = [0, 1, null, "str"];

class Rhino {
  constructor() {}
}
class Elephant {
  constructor() {}
}
class Snake {
  constructor() {}
}
let zoo = [new Rhino(), new Elephant(), new Snake()];

// 上下文类型
// 表达式的类型和所处的位置相关

// 1. 通常包含函数的参数
// 2. 赋值表达式的右边
// 3. 类型断言
// 4. 对象成员和
// 5. 数组字面量
// 6. 返回值语句

// typescript的类型检查器使用左侧的window.onmousedown来推断右侧函数表达式的类型

// window.onmousedown = function (mouseEvent: MouseEvent) {
//   console.log(mouseEvent.button); //<- Error
// };

// const btn = document.getElementById("root");
// btn.addEventListener("input", function (e: Event) {
//   const element = e.target as HTMLTextAreaElement;
//   console.log(element.setAttribute("value", "20"));
// });

export {};
