// new : heap 메모리에 할당 하라는 뜻
// Object() : 생성자, 객체의 property가 들어갈 수 있는 공간을 확보하고 그 주소를 가져와준다.
// 메모리 구조(RAM)
// 클래스 영역, STACK, HEAP(동적 할당)

let dinner = new Object();  // dinner라는 빈 객체 선언
let user = {
    money: 30000
}

dinner.name = "마라탕";
dinner.price = 15000;
// dinner.pay = (money) => {   
//     return money - dinner.price;
// };

// 주소(user)를 전달받은 뒤
dinner.pay = (user) => {
    // 직접 주소에 접근하여 money 값을 수정한다
    user.money -= dinner.price;
}

// user 객체가 가지고 있는 주소를 전달
dinner.pay(user);
// 원본 객체인 user의 money가 수정된 것을 확인할 수 있다.
console.log(user.money);