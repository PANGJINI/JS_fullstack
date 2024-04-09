// 프로토타입
// 프로토 타입의 프로퍼티에 선얺마ㅕㄴ, 객헿체화와 상관없이 땩 한 번만 만들어진다.
// 모든 객체가 공유하는 값이 필요하면 프로퍼타입의 프로퍼티로 센언
// 모든 객체가 공유하는 값을 간번에 관리

// 직원 객체
function Employee(name, income=0) {
    this.name = name;       // 이름
    this.income = income;   // 수입
    //this.totalIncome = 0;   // 모든 직원의 수입을 합한 것

    this.printInfo = () => {
        console.log(`${name}: ${income}만원`);
    }
    
}
Employee.prototype.totalIncome = 0;

// totalIncome의 경우 각 개체마다 생성되어서 나재민의 totalIncome과 황진의 totalIncome은 다른 값을 가진다.
// 모든 객체가 공유해야 할 경우에 프로토타입으로 만들어준다.

na = new Employee("나재민", 100);
hwang = new Employee("황진", 200);


// 객체로 프로토타입의 프로퍼티를 수정하면, 객체의 프로퍼티에 추가된다.
// 객체로 프로토타입의 프로퍼티를 수절할 수 없다. 사용은 가능하다.
na.totalIncome = 100;
// 객체의 property에 추가
console.log(na.totalIncome);    //100
// 객체에 property가 없으면 프로토타입의 property에서 찾는다.
console.log(hwang.totalIncome);    //0


// 프로토타입에 프로퍼티를 선언하는 이유를 모든 객체가 굥유하기 위함
Employee.prototype.totalIncome += na.income;
console.log(na.totalIncome);
Employee.prototype.totalIncome += hwang.income;
console.log(hwang.totalIncome);


// 공통 요소를 쉽고 편하게 관리하고자 프로토타입의 프로퍼티에 선언한다.
Employee.prototype.printInfo = function() {
    console.log(`${this.name}: ${this.income}만원`);
}
na.printInfo();
hwang.printInfo();