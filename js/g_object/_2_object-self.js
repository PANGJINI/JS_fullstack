// instance
// for instance 예를 들면이라는 뜻
// instance는 객체화를 의미함. 객체가 아님!
// instance를 통해 나온 변수를 인스턴스 객체 instance variable이라고 한다.
let post = {    user: user  };


// 숙제
// 중고차 시장에서 다음과 같은 데이터가 필요하다.

// 객체1. 중고차 / 객체2. 차주

// 차와 차주는 m:n의 관계
// m:n 관계를 그대로 클래스 설계를 하게 되면 순환 참조가 발생하게 된다.
// 1:n, n:1 관계로 해소 후 객체를 만들어야 한다.

// 자동차
let car = {};

// 등록증
let registration = { car:car, owner: owner };

// 차주
let owner = {};