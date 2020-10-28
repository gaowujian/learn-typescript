namespace interface {
  namespace case1 {
    // 我们需要一个属性带label的数据
    function printLabel(labeledObj: { label: string }) {
      console.log(labeledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
  }

  namespace useInterface {
    //   定义一个interface，然后替换原来位置
    interface labelValue {
      label: string;
    }
    function printLabel(labeledObj: labelValue) {
      console.log(labeledObj.label);
    }
    // ts 检查器，不在乎传入数据的顺序，只在乎接口定义的属性是否存在，以及必要属性是否传入
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
  }
  namespace props {
    //   使用 optional和readonly属性
    interface labelValue {
      label: string;
      name?: string;
      readonly age: number;
    }
    const labelData: labelValue = {
      label: "labelValue",
      age: 20,
    };
    // 只读不能修改
    // labelData.age = 20

    // 对于变量不能赋值，使用const关键字，对于属性不能赋值，使用readonly关键字
  }
  namespace propCheck {
    interface SquareConfig {
      color?: string;
      width?: number;
    }

    function createSquare(
      config: SquareConfig
    ): { color: string; area: number } {
      return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
      };
    }
    // 你可能认为传入了一个不必要的colour值是无关紧要的，只需要接受width就好了，但是ts不这么认为
    // ts针对于这种对象字面量值赋值的行为进行了特殊的处理, 一旦变量没有传入值的属性就会报错
    // let mySquare = createSquare({ colour: "red", width: 100 });

    // 解决方法
    // 1. 告诉ts checker，我比你更了解代码，直接把字面量值断言为指定类型
    let mySquare1 = createSquare(<SquareConfig>{ colour: "red", width: 100 });
    let mySquare2 = createSquare({ colour: "red", width: 100 } as SquareConfig);

    // 2. 不使用对象字面量传值，但是不推荐这种，可能会有bug
    let temp = { colour: "red", width: 100 };
    let mySquare3 = createSquare(temp);

    // 3. 最好的办法是使用 index signature，索引签名
    // 覆盖掉之前的SquareConfig，支持索引签名，所以额外的属性都会被接收
    interface SquareConfig {
      color?: string;
      width?: number;
      [propName: string]: any;
    }
    let mySquare = createSquare({ colour: "red", width: 100 });
  }

  namespace functionType {
    // 函数类型接口
    interface SearchFunc {
      (source: string, subString: string): boolean;
    }
    // 这里不需要给x和y指定类型，因为可以通过上下文来判断
    let search: SearchFunc = function (x, y) {
      return true;
    };
    search("a", "b");
  }
  namespace classType {
    // 类类型接口
    interface ClockInterface {
      currentTime: Date;
      setTime(d: Date): void;
    }

    class Clock implements ClockInterface {
      currentTime: Date = new Date();
      setTime(d: Date) {
        this.currentTime = d;
      }
      constructor(h: string, m: string) {}
    }
    const c = new Clock("10", "29");
    // 有的时候，我们想通过定义一个接口来限制类的构造函数，这里引出了另外一个点
    // 接口只能够规定类的private部分，而不能规定public部分，而构造函数就属于public的部分

    // interface TestConstructor {
    //   new (hour: number, minute: number);
    // }

    // class Test implements TestConstructor {
    //   currentTime: Date;
    //   constructor(h: number, m: number) {}
    // }
    // const t = new Test(10, 20);
  }
  namespace extendInterface {
    interface Shape {
      color: string;
    }

    interface PenStroke {
      penWidth: number;
    }

    interface Square extends Shape, PenStroke {
      sideLength: number;
    }

    let square = {} as Square;
    square.color = "green";
    square.sideLength = 10;
    square.penWidth = 5.0;
  }
  namespace hybridType {
    //  混合类型, 之前我们用过了函数接口，在js中函数也是对象，对于函数接口，我们除了声明一个函数，
    // 还可以声明其他属性
    interface Counter {
      (num: number): number;
      color: string;
    }
    function getCounter() {
      const counter = function (x) {
        return x;
      } as Counter;
      counter.color = "red";
      return counter;
    }
    const counter = getCounter();
    console.log(counter.color);
  }
}
