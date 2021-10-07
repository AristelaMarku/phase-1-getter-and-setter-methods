// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius=radius;
    }
    get diameter(){
        return 2*this.radius
    }

    get circumference(){
        return 2* Math.PI * this.radius

    }

    get area (){
        return Math.Pi * this.radius* this.radius
    }


    set radius(radius) {
        this._radius = radius;
      }

}

let circle=new Circle(6)
circle.radius
circle.radius=3
circle.circumference=6
circle.area=6