// this는 사용하는 위치에 따라 가리키는 값이 달라진다.

function User(name) {
    // 생성자 안에서 this의 역할은 접근한 객체를 의미한다.
    this.name = name;
}

function thisTest() {
    // global의 this
    console.log(this);
    console.log(this === global);   // true
}
thisTest();


// .js 파일 하나가 하나의 함수이다.
// 사용한 영역의 상위 객체를 가리킨다.
// local의 this
console.log(this);      // { }
console.log(this === global);           // false
console.log(this === module.global);    //true




function thisTest2() {
    // global 객체를 의미하는 this
    console.log(this);
    console.log(this === global);   // true
}
thisTest2();

// 화살표 함수에서의 this는 local에서의 상위 객체를 뜻한다.
// global 객체로 사용하고 싶은 경우 화살표 함수를 사용하면 안되고 일반 함수를 써야한다.
const arrowTest = () => {
    console.log(this);
    console.log(this === global);   //false
}
arrowTest();