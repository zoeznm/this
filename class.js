class ItsMe {
  constructor() {
    this.name = "공욱재",
    this.age = 26,
    this.home = "대전"
  }
  sentence() {
    return this.name + "은 미암이다.";
  }
}

let itsMe = new ItsMe();
console.log(itsMe);