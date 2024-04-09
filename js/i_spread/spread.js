let user = {
    id:1,
    name:"pang",
}


let numbers = [1, 3, 5, 7];

// 비구조화 할당(구조 분해)
const { id, name } = user;
const [number1, number2, number3, number4 ] = numbers;

// user.id, user.name과 같은 방법으로 사용할 필요가 없다.
// 바로 id와 name으로 사용할 수 있다.
console.log(id, name);      //1 pang

// 보통 함수의 매개변수 자리에 많이 사용하게 된다.
function printIntro({id, name}) {
    console.log(id, name);  //1 pang
}
printIntro(user);

// user.id를 3으로 바꾸고 싶을 때
// 아래처럼 변경하면 값은 바뀌지만 user객체를 가리키고 있는 주소 자체는 변하지 않는다.
// 브라우저는 이런 값의 변화를 인식하지 못하기 때문에 새로운 객체를 할당함으로써 이벤트가 발생할 수 있도록 해준다.
user.id = 3;
console.log(user.id);       //3

user = { ...user, id:3 };
console.log(user.id);       //3


// ...rest는 id를 제외한 나머지 정보들이 들어간다.
// 앞에 아무것도 적지 않으면 모든 정보들이 들어간다.
// ...rest는 rest문법이다.
function test({id, ...rest}) {
    console.log(rest);      //name:'pang'
}
test(user);


// 몇 개의 매개변수가 필요한지 모르는 경우에도 rest 문법을 사용할 수 있다.
function getTotal(...datas) {
    console.log(datas);     //1, 2, 3, 4
}
//getTotal(1, 2, 3, 4);
getTotal([1,2,3,4]);    //[ [ 1, 2, 3, 4 ] ] 배열을 통채로 가져온다
getTotal(...[1,2,3,4]); //[ 1, 2, 3, 4 ] 각 요소로 가져온다

console.log(..."abc");      //a, b, c 각각을 가져옴
function getString(...data) {
    console.log(data);
}
getString(..."1234");       //1, 2, 3, 4 각각



/// object 객체는 매개변수로 전달받을 때 비구조화 할당으로 받는 것이 편하다.
/// 만약, 새로운 object 객체가 필요하다면 rest 문법을 사용해서 기존 값을 복사해서 사용할 수 있다.

/// array 객체는 매개변수로 전달받을 때
/// 몇 개의 매개변수일지 알 수 없을 때 rest 문법을 사용해서 받는다.

