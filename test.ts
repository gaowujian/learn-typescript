class Animal {
  name: string = "父亲的名字";
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}
class Pig extends Animal {
  name: string = "自己的名字";
  constructor() {
    super("222");
  }
  getName() {
    return this.name;
  }
}
const p = new Pig();

console.log("p.getName()", p.getName());

export {};
