// 객체 object
/*
 * class는 사물의 공통 요소를 뽑아내서 만든 추상적인 개념이다.
 * 클래스를 사용하는 이유는 한 번 선언으로 재사용하기 위함이다.
 * 
 * 추상적인 클래스를 구체화 한 것이 객체
 * 클래스에 선언된 property(자바에서는 field)를 사용할 수 있다.
 * 객체의 property에 접근하기 위해서는 . 연산자 or [ ]연산자를 사용한다.
 * 
 * user.name으로 프로퍼티를 사용할 때
 * name에는 value가 아니라 값이 저장된 주소값이 저장되어 있다.
 * 변수가 시작된 공간의 시작 주소를 offset이라고 한다.
 * 
 * 객체는 값(주소값)으로 봐야 한다.
 */

let user = {            //user - object
    name: "황진",       //name, age, address, introduce - property
    age: 20,
    address: "경기도",

    introduce: () => {
        console.log("ㅎㅇ");
    },
    card1: "신한",
    card2: "농협",
    card3: "국민",
};

console.log(user.name);
user.introduce();
console.log(typeof user);   //user의 자료형 object
console.log(user["address"]);


// property에 접근할 때 . 연산자와 [ ] 연산자의 차이
/*
 * 일반적인 경우에는 . 연산자를 사용함
 *
 * 만약 property 이름에 "-"와 같은 특수문자가 들어가 있거나
 * 이름에 규칙성이 있어서 한 번에 가져와야 할 때 [ ] 연산자를 이용한다.
 * 
 * 만약 html 코드에서 name 속성이 join-form 일 때
 * <script> 태그에서 document.join-form 으로 사용하게 되면 join-form을 읽는 것이 아니라
 * join - form 연산을 해버린다.
 * 이럴 때 document["join-form"] 의 형태로 사용해야 함
 */
console.log(user.address);
console.log(user["name"]);

for(let i=0; i<3; i++) {
    console.log(user[`card${i+1}`]);
}
