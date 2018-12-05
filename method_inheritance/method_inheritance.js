function Animal(name) {
    this.getName = () => {
        return name;
    }
    console.log(name);
}

function Dog(name) {
    Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = () => {
    console.log('Dog ' + dog.getName() + ' is barking')
}

var dog = new Dog('Aban');

dog.getName();
dog.bark();