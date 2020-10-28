namespace tsFunction {
  namespace normalFn {
    // Named function
    function add(x, y) {
      return x + y;
    }

    // Anonymous function
    let myAdd = function (x, y) {
      return x + y;
    };
  }
  namespace FnType {
    //   type a function, 在ts中给js的函数添加类型，包括参数和返回值
    function add(x: number, y: number): number {
      return x + y;
    }

    let myAdd1 = function (x: number, y: number): number {
      return x + y;
    };
    // write function type, 给一个函数定义完整的type
    let myAdd2: (x: number, y: number) => number = function (
      x: number,
      y: number
    ): number {
      return x + y;
    };
  }
  namespace inferType {
    //  类型推测之上下文推测，类型只存在等号的一边，另一侧可以进行推测
    // 两侧都有类型
    let add: (x: number, y: number) => number = function (
      x: number,
      y: number
    ): number {
      return x + y;
    };
    // 左侧有类型
    let add1: (x: number, y: number) => number = function (x, y): number {
      return x + y;
    };
    // 右侧有类型
    let add2 = function (x: number, y: number): number {
      return x + y;
    };
  }
  namespace propsType {
    //   在typescript的函数中，参数的默认行为是必须要传入的，和js中不同，js的参数是可选的，未被填入的
    // 默认是undefined，在ts中如果想实现optional的行为，需要使用 ?:来修饰参数
    // 1. 任何的可选参数，都必须在必须参数之后,否则会有错误行为
    // 错误case演示
    // function buildName(firstName: string, lastName?: string, fullName: string) {
    //   if (fullName) return firstName + " " + lastName;
    //   else return firstName + fullName;
    // }
    // console.log(buildName("tony", "gao"));
    // 2. 参数末尾的默认参数和可选参数行为一直，这个时候的默认参数就是可选的
    function buildName1(firstName: string, lastName?: string) {
      // ...
    }
    function buildName2(firstName: string, lastName = "Smith") {
      // ...
    }
    // 3.和可选参数不同，默认参数不一定要放在必须参数之后，
    // 如果需要让默认参数生效，需要显式传入undefined
    function buildName(firstName = "Will", lastName: string) {
      return firstName + " " + lastName;
    }

    // let result1 = buildName("Bob"); // error, too few parameters
    // let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
    let result3 = buildName("Bob", "Adams"); // okay and returns "Bob Adams"
    let result4 = buildName(undefined, "Adams");
    console.log(result4);
  }
  namespace restProp {
    //   rest parameter 剩余参数和之前的必须参数，可选参数以及默认参数不同，之前都是针对一个参数进行考虑
    // rest parameter 是去操作多个参数，可以被看作是一个可选参数的数组
    // rest parameter 不支持默认参数
    function logNumbers(x: number, y: number, ...rest: number[]): number[] {
      return rest;
    }
    console.log(logNumbers(1, 2, 3, 4, 5));
  }
  namespace tsThis {
    //   tsconfig中的noImplicitThis可以用来提示this在es5函数中this可能丢失的问题
    // 在开启之后，如果this隐式指向了any就会报错
    // 使用箭头函数之后，可以让this和外层function的this指向同一处
    let deck = {
      suits: ["hearts", "spades", "clubs", "diamonds"],
      cards: Array(52),
      createCardPicker: function () {
        return function () {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);
          //   console.log(this);

          return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
      },
    };

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
  }
  namespace tsOverload {
    //   js是一门动态语言，对于js来说，通过传入不同的参数来返回不同类型的对象是一个并不常见的操作
    // 在js中实现返回不同的结果，需要在逻辑中添加对参数的类型判断，然后执行不同的代码块
    // ts中的重载并没有提供js额外的能力，可以把逻辑抽离到不同function中，他只是提供了一种检查参数
    // 的能力，在下图的例子中，ts的重载只是能提示x必须是{ suit: string; card: number }类型的数组
    // 或者是string类型，可能有人认为我们可以使用union类型来定义一种新类型，但是重载的这种方式更加灵活

    let suits = ["hearts", "spades", "clubs", "diamonds"];

    function pickCard(x: { suit: string; card: number }[]): number;
    function pickCard(x: number): { suit: string; card: number };
    function pickCard(x: any): any {
      // Check to see if we're working with an object/array
      // if so, they gave us the deck and we'll pick the card
      if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
      }
      // Otherwise just let them pick the card
      else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
      }
    }

    let myDeck = [
      { suit: "diamonds", card: 2 },
      { suit: "spades", card: 10 },
      { suit: "hearts", card: 4 },
    ];

    let pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    let pickedCard2 = pickCard(20);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
  }
}
