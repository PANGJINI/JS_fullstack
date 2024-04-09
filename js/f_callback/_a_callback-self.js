//두 정수의 덧셈 결과 출력하기
// const add = (n1, n2, callback) => {
//     if(callback) {
//         callback(n1+n2);
//     }
//     return n1+ n2;
// };

// add(1, 3, (result) => {
//     console.log(result)
// });



// //두 정수를 곱한 결과에 2 곱하기
// const mul = (n1, n2, callback) => {
//     if(callback) {
//         callback(n1*n2);
//     }
//     return n1*n2;
// };

// const result = mul(3, 4, (result) => {
//     console.log(result*2);
// })



// //성과 이름을 입력받아서 풀네임을 만든 뒤 000님 출력
// const rename = (last, first, callback) => {
//     if(callback) {
//         return callback(last + first);
//     }
//     return last+first;
// };

// const name = rename("황","진", (result) => {
//     console.log(result + "님");
// });



// //상품 1개 가격, 총 가격을 입력받고 개수가 5개 이하면 true, 아니면 false
// const count = (perPrice, total, callback) => {
//     if(callback) {
//         return callback(total/perPrice);
//     }
//     return total/perPrice;
// };

// const booleanResult = count(1000, 9000, (result) => {
//     console.log(result <= 5);
// });



// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 "---원 결제 완료"
// 결제 상태가 false일 때 "---원 결제 취소" 출력
// const payment = (price, paymentStatus, callback) => {
//     const message = paymentStatus
//         ? price+"원 결제 완료" : price+"원 결제 취소";
    
//     if(callback) {
//         callback(message);
//     }
// };
// payment(1000, true, (msg) => {
//     console.log(msg);
// });


//강의 버전
//강의 버전이 꼭 좋은것은 아님
//사용자가 payment 함수를 콜백 없이 그냥 price에 대한 결과만 얻고싶다면
//result 변수를 따로 선언하고 콜백 함수 밖에 return result를 해줘도 된다.
const payment = (price, paymentStatus, callback) => {
    if(callback) {
        callback(paymentStatus
        ? price+"원 결제 완료" : price+"원 결제 취소");
    }
};

payment(3000, true, console.log);



// ❤숙제
// 콜백함수 문제 3개씩 만들어오기
// 이어지는 목적을 두 가지 생각하기

//두 수의 차이를 출력하기
const subtract = (n1, n2, callback) => {
    if(callback) {
        callback(n1-n2);
    }
    return n1-n2;
};

subtract(8, 3, (result) => {
    console.log(result);
});


//성적 받아서 학점 출력하기
const calGrade = (score, callback) => {
    let grade;
    if(score >= 90) grade = 'A';
    else if(score >= 80) grade = 'B';
    else if(score >= 70) grade = 'C';
    else
        grade = 'F';

    if(callback) {
        callback(grade);
    }
    return grade;
};

calGrade(85, (result) => {
    console.log("학점 : "+result);
});
