// 1️⃣회원정보
// 번호, 이름, 나이
// 1, user1, 18
// 2, user2, 19
// 3, user3, 20
function User(id, name, age) {
    this.id=id;
    this.name=name;
    this.age=age;
}


/* ✨내 코드
const user1 = new User(1, "user1", 18);
const user2 = new User(2, "user2", 19);
const user3 = new User(3, "user3", 20);

let userInfo = [user1, user2, user3];

// 회원 목록 중 회원 이름만 출력
userInfo.filter((data) => {
    console.log(data.name);
})


// 회원 목록 중 나이가 20살 이상인 회원 추출 후 전체 정보 출력
userInfo.filter((data) => {
    if(data.age >= 20) console.log(data);
})
*/


//강의 코드
let users = [];

for (let i = 0; i < 3; i++) {
    users.push(new User(i + 1, `user${i + 1}`, 18 + i));
}

// 회원 목록 중 회원 이름만 출력
users.forEach((user) => {
    console.log(user.name);
});

// 회원 목록 중 나이가 20살 이상인 회원 추출 후 전체 정보 출력
users
    .filter((user) => user.age >= 20)
    .forEach((user) => {
        console.log(`${user.id}. ${user.name}: ${user.age}살`);
    });



// 2️⃣상품정보
// 번호, 상품명, 가격, 구매회원
// 3, 상품1, 3000, user1
// 8, 상품3, 1000, user2
function Product(id, name, price, user) {
    this.id=id;
    this.name=name;
    this.price=price;
    this.user=user;
}

/* ✨내 코드
// 유저 정보를 삽입할 때 그냥 "user1"이 아닌 인덱스 번호로 넣어주면
// 배열로 유저의 전체 정보가 들어가게 된다.
const product1 = new Product(3, "상품1", 3000, "user1");
const product2 = new Product(8, "상품3", 1000, "user2");
let productInfo = [product1, product2];
*/


// 강의 코드
let products = [
    new Product(3, "상품1", 3000, users[0]),
    new Product(8, "상품3", 1000, users[1]),
];

// 상품 목록을, 상품을 구매한 구매 회원의 목록으로 변경한다.
let buyers = products.map((product) => product.user);
console.log(buyers);

// 구매자의 전체 정보를 출력한다.
buyers.forEach((buyer) => {
    console.log(`${buyer.id}. ${buyer.name}: ${buyer.age}살`);
});



// 3️⃣1~100까지 합 출력
/* ✨내 코드
let numbers = new Array();
for(let i=0; i<100; i++) {
    numbers[i] = i+1;
}
*/

//강의 코드
let numbers = new Array(100).fill(0).map((_, i) => i+1);

const sum = numbers.reduce((variable, number) => {
    return variable + number;
})
console.log("1부터 100까지의 합 : " + sum);