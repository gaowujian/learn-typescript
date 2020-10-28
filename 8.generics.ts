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
    //   泛型类型
    function identity<T>(arg: T): T {
      return arg;
    }
    let myIdentity: <T>(arg: T) => T = identity;

    // 如果用对象字面量值来表示泛型，这样我们就可以引入泛型接口,因为接口可以来描述对象
    function identity1<T>(arg: T): T {
      return arg;
    }

    let myIdentity1: { <T>(arg: T): T } = identity1;

    // 第一个泛型接口
    interface GenericIdentityFn {
      <T>(arg: T): T;
    }

    function identity2<T>(arg: T): T {
      return arg;
    }

    let myIdentity2: GenericIdentityFn = identity2;
  }
}
