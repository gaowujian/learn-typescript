namespace tsClass {
  // 传统的js编程是通过使用函数和基于原型链的继承来建立可服用组件。在es6之后，js中引入了class的概念，
  // 在ts中，对js中的class进行了进一步的增强，实现了现有js规范中还未支持的特性，支持编译到符合主流浏览
  // 器的版本，而不需要去等待下一代js标准的发布
  namespace basicClass {
    class Greeter {
      greeting: string;

      constructor(message: string) {
        this.greeting = message;
      }

      greet() {
        return "Hello, " + this.greeting;
      }
    }

    let greeter = new Greeter("world");
  }
  namespace inheritance {
    //   js中已经实现了extends关键字的继承
    class Animal {
      move(distanceInMeters: number) {
        console.log(`Animal moved ${distanceInMeters}m.`);
      }
    }

    class Dog extends Animal {
      bark() {
        console.log("Woof! Woof!");
      }
    }

    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
  }
  namespace modifiers {
    //   属性和方法的默认修饰符是public
    // public：类内外都可以访问
    // protected：当前类和子类中可以访问
    // private：当前类内访问

    // ts本身是一个结构性系统，当我们比较两个变量的类型的时候，如果两个变量的所有属性都兼容，那么
    // 我们认为这两个变量所属的不同类型也是兼容的，但是在class中，存在特殊情况，尽管两个类都有一个private
    // 的name属性，但是我们不认为他们是兼容的，name属性的来源不同

    class Animal {
      private name: string;
      constructor(theName: string) {
        this.name = theName;
      }
    }
    class Rhino extends Animal {
      constructor() {
        super("Rhino");
      }
    }

    class Employee {
      private name: string;
      constructor(theName: string) {
        this.name = theName;
      }
    }

    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;
    // animal = employee;
  }
  namespace readonlyModifier {
    //   readonly的属性必须在声明或者在constructor中进行初始化
    class Octopus {
      readonly name: string;
      readonly numberOfLegs: number = 8;

      constructor(theName: string) {
        this.name = theName;
      }
    }

    let dad = new Octopus("Man with the 8 strong legs");
    // dad.name = "Man with the 3-piece suit";
  }
  namespace paramProp {
    // Parameter properties参数属性，允许我们在一个地方进行属性的创建和初始化
    // 在构造函数中，我们可以使用 public, protected,private 或者 readonly等关键字修饰参数，
    // 允许我们把成员函数的声明和赋值放在一个地方

    // class Octopus {
    //   readonly numberOfLegs: number = 8;
    //   public readonly name: string;
    //   constructor(name: string) {
    //     this.name = name;
    //   }
    // }
    // 等价于 ====>
    class Octopus {
      readonly numberOfLegs: number = 8;
      constructor(public readonly name: string) {}
    }

    let dad = new Octopus("Man with the 8 strong legs");
    console.log(dad.name);
  }
  namespace accessor {
    //   js中也有accessor，即setter/getter
    //  accessor 是es5之后的特性，es3不支持
    class Employee {
      fullName: string;
    }

    let employee = new Employee();
    employee.fullName = "Bob Smith";

    if (employee.fullName) {
      console.log(employee.fullName);
    }
  }
  namespace tsStatic {
    //   static属性和方法针对类，并非针对实例
  }
  namespace tsAbstract {
    //   使用abstract用来定义抽象类和抽象方法，抽象类中可以抽象函数和普通函数，普通函数需要实现
    // 继承抽象类的子类需要实现所有抽象方法
  }
  namespace advancedTech {
    //   高级技巧
    //  class语法的声明其实创造了两个东西，一个是类实例instance的类型，另外一个是构造函数的声明，
    // 会通过constructor做编译并声明
    class Greeter {
      greeting: string;

      constructor(message: string) {
        this.greeting = message;
      }

      greet() {
        return "Hello, " + this.greeting;
      }
    }
    // 1. Greeter可以作为类实例的类型
    let greeter: Greeter;
    // 2. Greeter可以做为构造函数被调用
    greeter = new Greeter("world");
    console.log(greeter.greet()); // "Hello, world"
  }
  namespace classAsInterface {
    //   class也可以被做为interface
    // 这里我们就使用了抽象类的概念，不仅有属性，还有方法
    abstract class Point {
      x: number;
      y: number;
      constructor(public name: string = "tony") {}
      abstract getName(): string;
    }

    interface Point3d extends Point {
      z: number;
    }

    let point3d: Point3d = {
      x: 1,
      y: 2,
      z: 3,
      name: "",
      getName: function () {
        return this.name;
      },
    };
  }
}
