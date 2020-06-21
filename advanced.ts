class Pet {
  name: string;
  constructor(name) {
    this.name = name;
  }
}

class Fish extends Pet {
  constructor(params) {
    super(params);
  }
  swim() {
    console.log(`${this.name} is swimming`);
  }
}

class Dog extends Pet {
  constructor(params) {
    super(params);
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

function getSmallPet(): Fish | Dog {
  const dog = new Dog("tony");
  return dog;
}

let pet = getSmallPet();
// 使用类型断言来让不同类型可以使用不同的方法
if ((<Dog>pet).run) {
  (<Dog>pet).run();
} else {
  (<Fish>pet).swim();
}

// 使用类型守卫简化类型断言的操作
// https: zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html
// 类型守卫就是如下的一个函数 pet is Fish是谓语动词

function isFish(pet: Fish | Dog): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

// 这样的话 不仅在if之后可以访问到swim，还知道在else中有run方法, 限制条件是只有两个type组成union type

if (isFish(pet)) {
  pet.swim();
} else {
  pet.run();
}

// 使用instanceof 类型守卫

if (pet instanceof Dog) {
  pet.run();
} else {
  pet.swim();
}

// 使用typeof 类型守卫

function getRandomType(): number | string {
  return Math.random() > 0.5 ? 10 : "str";
}

const result = getRandomType();

if (typeof result === "string") {
  console.log(result.concat("content"));
} else {
  console.log(result * 50);
}

// 类型别名和接口

type Alias = { num: number };
interface Interface {
  num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

// 区别
// 1.接口创建了一个新的名字，可以在其它任何地方使用。
// 2. 类型别名不能被extends和implements（自己也不能extends和implements其它类型）
// 3.如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。
export {};
