// ts丰富了class
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "tmp";
        // constructor() {
        //   // this.name = name;
        // }
    }
    return Animal;
}());
var ani = new Animal();
console.log(ani.name);
// console.log(Animal.name);
