namespace generics {
  namespace genericsTypeVariable {
    // 泛型类型和泛型类型变量，把泛型当作一种类型来使用
    // arg就是泛型类型变量
    // T就是泛型类型
    function identity<T>(arg: T): T {
      // 在不做任何处理的时候，泛型类型和unknown的效果有点类型，因为T可以是任意类型，
      //   我们不能说他就一定有length属性
      //   console.log(arg.length);

      return arg;
    }
    let output = identity("myString");
    //
  }
  namespace genericsType {
    // 开始介绍泛型类型

    // 通过一个泛型函数来引入，声明 + 实现
    function identity<T>(arg: T): T {
      console.log(arg);
      return arg;
    }

    // 抽象出函数的类型，就使用type关键字进行简化
    type fn = <T>(arg: T) => T;
    let myIdentity1: fn = identity;
    myIdentity1("type like identity");

    // 如果用对象字面量值来表示泛型，这样我们就可以引入泛型接口,因为接口可以来描述对象
    // 这里描述的是一个函数对象
    let myIdentity2: { <T>(arg: T): T } = identity;
    myIdentity2<string>("object like identity");

    // 函数对象抽象成接口表示
    // 这个泛型接口的类型放在类函数上，而不是针对整个接口
    // 类型参数仅对该函数可见, 意味着这个对象当作函数用的时候需要指定类型，当作普通对象使用不需要
    interface GenericIdentityFn {
      // 函数声明,参数列表和返回值
      <T>(arg: T): T;
      info: string;
    }
    // 函数实现，接受一个数据直接返回
    identity.info = "required info";
    let myIdentity3: GenericIdentityFn = identity;
    myIdentity3<string>("interface like identity");
    console.log(myIdentity3.info);

    // 类型参数对全体成员可见，在使用接口的时候就要传入类型
    interface GenericIdentityFn2<T> {
      fn(arg: T): T;
      info: string;
    }
    let myIdentity4: GenericIdentityFn2<string> = {
      fn: function (x) {
        console.log(x);
        return x;
      },
      info: "required info",
    };
    myIdentity4.fn("全部成员的泛型T函数");

    // 我们会发现在 identity3 和 identity4中已经发生了一些变化，原来是一个泛型的函数，后来只是
    // 在一个泛型类型中添加了一个非泛型的函数签名, 因为接受类型的传入不在调用函数的时刻了，而是之后通过.fn来
    // 调用函数了，所以我们才叫他非泛型的函数签名

    // 所以对于我们什么时候把类型参数放在接口处，什么时候放在待调用语句前可以反映出一个类型的哪些部分是泛化的
  }
  namespace genericsClass {
    //  泛型接口
    interface GenericInterface<T> {
      zeroValue: T;
      add: (x: T, y: T) => T;
    }
    class Person implements GenericInterface<string> {
      constructor(public zeroValue) {}
      add(x, y) {
        return x;
      }
    }

    // 泛型类，和泛型接口长相很相似
    // 由于泛型只能管理类的instance部分，所以static方法是不能使用泛型的
    class GenericNumber<T> {
      zeroValue: T;
      add: (x: T, y: T) => T;
      // static staticMeth od: (x: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
      return x + y;
    };
  }
  namespace genericsConstraints {
    // 泛型约束，有时候需要对泛型进行一定的约束限制，例如泛型有个length属性
    // 解决办法就是 通过引入一个目标形状的interface 让泛型去extend
    interface withLength<T> {
      length: T;
    }
    function printLength<T extends withLength<number>>(arg: T): number {
      return arg.length;
    }
  }
  namespace typeParameters {
    // type variable = type parameters 都叫做类型变量，即为T
    // 可能同时存在多个类型变量，类型变量之间也存在依赖关系

    // keyof 叫做index type query operator，索引类型查询操作符
    // 第二个参数的类型推导为 该字面值联合类型 "a" | "b" | "c" | "d"
    function getProperty<T, K extends keyof T>(obj: T, key: K) {
      return obj[key];
    }

    let x = { a: 1, b: 2, c: 3, d: 4 };

    getProperty(x, "a");
    // getProperty(x, "m");
  }
}
