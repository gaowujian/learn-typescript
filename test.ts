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
export {};
