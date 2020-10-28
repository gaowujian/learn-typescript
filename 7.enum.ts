namespace tsEnum {
  // enum是ts中提供的一个并不算类型相关的特性，只是允许开发人员能够给一组常量进行命名。
  // enum提供了两种枚举，一种是数字枚举，一种是字符串枚举
  namespace basicUsage {
    //   数字枚举需要用数字初始化
    enum One2Three {
      one,
      two,
      three,
    }
    //
    enum Direction {
      UP = "UP",
      DOWN = "DOWN",
      LEFT = "LEFT",
      RIGHT = "RIGHT",
    }
  }
}
