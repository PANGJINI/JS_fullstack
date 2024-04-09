// 상품 1개 가격과 총 가격을 입력받고 개수가 5개 이하면 true 아니면 false
// 총 가격/상품1개 가격 = 개수
// 5개 이하면 true, 아니면 false

const count = (price, amount, callback) => {
    if(callback) {
        return callback(amount / price);
    }
    return amount / price;
};

// const result = count(1000, 5000);
// console.log(result); //5

const result = count(1000, 6000, (result) => {
    if(result <= 5)
        return console.log("true");
    else
        return console.log("false");
});

// ㅋㅋ true, false 출력..
// 조건문 자체가 boolean 값을 가진다는것❗
const result2 = count(1000, 6000, (result) => result <= 5);
console.log(result2);









// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 "---원 결제 완료"
// 결제 상태가 false일 때 "---원 결제 취소" 출력




// ❤숙제
// 콜백함수 문제 3개씩 만들어오기
// 이어지는 목적을 두 가지 생각하기