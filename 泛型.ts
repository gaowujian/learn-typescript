// 我们需要一种方法使返回值的类型与传入参数的类型是相同的。
// 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值
function identity<T>(arg: T): T {
  return arg;
}

// 使用方式1 传入所有参数，包括类型参数
let output1 = identity<string>("myString");
// 使用方式2 使用类型推论，根据传入的参数确定T的类型
let output2 = identity("myString");
