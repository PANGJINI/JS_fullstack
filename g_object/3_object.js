// 생성자
/*
 * 함수의 형태로 선언하지만, 함수라고 부르지 않고 생성자라고 부른다.
 * 생성자는 리턴값이 정해져있기 때문에 선언할 때 리턴을 사용할 수 없다.
 * 따라서, 함수라고 부를 수 없음.
 * 생성자가 리턴하는 것) 객체의 주소값
 * user()라는 생성자를 만들면 그 안에 property가 있다.
 * user 객체가 힙에 할당되는데 그 주소값을 return 해준다.
 * 
 * 앞글자를 대문자로 작성한 뒤 함수를 선언하면 이를 생성자로 판단한다.
 *
*/

function Card(name, user, cvc = "000") {  
    //매개변수를 사용함으로써 객체 생성과 동시에 초기화 할 수 있다.
    //default parameter -> cvc 초기화 안할 경우 000으로 자동 초기화

    // name: "";
    // cvc: "";

    //접근한 객체가 가지고 있는 주소가 this에 자동으로 담긴다.
    this.name = name;
    this.user = user;
    this.cvc = cvc;

    Card.prototype.getHistory = () => {
    //this.getHistory = () => {
        console.log(this.name + "은행 결제 목록");
        // 객체 선언을 한 번만 하기 때문에 그냥 name으로 작성해놓으면 어떤 객체가 접근했는지 알 수 없다.
        // this 키워드가 있기 때문에 a가 접근했으면 a.name, b가 접근했으면 b.name으로 사용할 수 있다.
    }
}

let user = {            //user - object
    name: "황진",       //name, age, address, introduce - property
    age: 20,
    address: "경기도",

    introduce: () => {
        console.log("ㅎㅇ");
    },
};

// 객체화를 할 때 마다 새로운 공간이 할당되고, 객체마다 고유한 주소값을 가진다.
const card1 = new Card();
const card2 = new Card();
card1.name = "신한";
card2.name = "국민";

card1.getHistory();
card2.getHistory();

const card3 = new Card("토스", "황진");
card3.getHistory();

card1.user = user;
card2.user = user;
