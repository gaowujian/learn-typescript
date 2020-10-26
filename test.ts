interface add<T> {
  (x: T): T;
}
interface IPoint<U = number, T = string> {
  x: U;
  y: T;
}
export {};
