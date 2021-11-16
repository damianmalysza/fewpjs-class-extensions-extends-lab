class Polygon {
  constructor(array){
    this.sideArray = array
  }

  get countSides() {
    return this.sideArray.length
  }

  get perimeter() {
    return this.sideArray.reduce((sum,sideLength) => sum += sideLength)
  }
}

class Triangle extends Polygon {
  get isValid(){
    let valid = true
    if ((this.sideArray[0] + this.sideArray[1]) < this.sideArray[2]) {valid = false}
    if ((this.sideArray[1] + this.sideArray[2]) < this.sideArray[0]) {valid = false}
    if ((this.sideArray[0] + this.sideArray[2]) < this.sideArray[1]) {valid = false}
    return valid
  }
}

class Square extends Polygon {
  get isValid(){
    let valid = false
    let uniqueArray = [...new Set(this.sideArray)]
    if (uniqueArray.length === 1) {valid = true}
    return valid
  }

  get area(){
    return Math.pow(this.sideArray[0],2)
  }
}