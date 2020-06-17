// 使用type关键字,可以用来起别名
type PlusType = (a: number, b: number) => number;

function sum(a: number, b: number): number {
  return a + b;
}

const sum2: PlusType = sum;

// 有一个需求，如果参数是string类型就返回，如果是函数类型就直接执行

type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver): string {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

const name1 = getName("name1");
const name2 = getName(() => {
  return "name2";
});

console.log(name1);
console.log(name2);

// type assertion 类型断言,用来告诉这个编译器 你比他更了解这个类型
// 没有类型断言的时候，我们只能用string和number的公有属性

function getLength(input: string | number): number {
  // 断言方式1 ： 值 as 类型

  //   const str = input as String;
  //   if (str.length) {
  //     return str.length;
  //   } else {
  //     const number = input as Number;
  //     return number.toString().length;
  //   }

  // 断言方式2： <类型>值

  if ((<string>input).length) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}
