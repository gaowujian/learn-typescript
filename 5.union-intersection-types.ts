namespace unionIntersectionTypes {
  // 之前介绍的基础类型，接口，函数都是原子性的概念
  // 我们有的时候不需要去通过接口去创建或者extend已有的类型，只是需要去组合类型而已
  namespace basicNeeds {
    //   这里我们使用any关键字，但是实现的时候只有number和string的处理逻辑
    // 如果是传统的oop变成方式，我们会对两种类型进行抽象，并建立hierarchy of types，但是
    // 在这个地方，这种方式显然有一些overkill
    function padLeft(value: string, padding: any) {
      if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
      }
      if (typeof padding === "string") {
        return padding + value;
      }
      throw new Error(`Expected string or number, got '${padding}'.`);
    }

    padLeft("Hello world", 4);

    // 使用union type
    function padLeft1(value: string, padding: number | string) {
      if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
      }
      if (typeof padding === "string") {
        return padding + value;
      }
      throw new Error(`Expected string or number, got '${padding}'.`);
    }
    padLeft1("Hello world", 4);
    padLeft1("Hello world", "str");
  }
  namespace unionWithCommonFields {
    //   如果一个类型是union type，那么就不能随便访问属性了，默认情况只能访问不同类型间公有的属性和方法
    interface Bird {
      fly(): void;
      layEggs(): void;
    }

    interface Fish {
      swim(): void;
      layEggs(): void;
    }

    declare function getSmallPet(): Fish | Bird;

    let pet = getSmallPet();
    pet.layEggs();
    // 无法访问fly和swim,除非使用断言
    (pet as Fish).swim();
  }
  namespace techForUnion {
    //   在使用union type的时候，为了区分出，当前变量具体是哪个类型，常见操作是设置一个公有的string字面量
    // 所以可以switch判断NetworkState.state 并作出不同的操作
    type NetworkLoadingState = {
      state: "loading";
    };

    type NetworkFailedState = {
      state: "failed";
      code: number;
    };

    type NetworkSuccessState = {
      state: "success";
      response: {
        title: string;
        duration: number;
        summary: string;
      };
    };

    // Create a type which represents only one of the above types
    // but you aren't sure which it is yet.
    type NetworkState =
      | NetworkLoadingState
      | NetworkFailedState
      | NetworkSuccessState;
  }
  namespace intersection {
    //   intersection和union不同，可以访问全部类型的全部属性，而union只能访问公有属性
    // interface 和type也可以混用，使用 & 或者 | 连接
    interface ErrorHandling {
      success: boolean;
      error?: { message: string };
    }

    type ArtworksData = {
      artworks: { title: string }[];
    };
    type intersectionType = ErrorHandling & ArtworksData;
    const p: intersectionType = {
      success: true,
      artworks: [{ title: "title" }],
    };
    console.log(p.success);
    console.log(p.error);
    console.log(p.artworks);
  }
}
