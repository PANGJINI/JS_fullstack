// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱하고 출력

// 두 정수 곱한 결과에 2 곱하기
function mul(n1, n2, callback) {
    if(callback) {
        callback(n1*n2*2);
    }
    return n1*n2*2;
}

// 출력하기
function mulResult(result) {
    console.log(result);
}

mul(1, 2, mulResult);


// 익명함수 사용하기
mul(1, 2, function(result) {
    console.log(result);
});


// 💙화살표 함수로 바꾸기
const mul2 = (n1, n2, callback) => {
    if(callback) {
        callback(n1*n2*2);
    }
    return n1*n2*2;
};

mul2(1, 3, (result) => {
    console.log(result);
});

//어차피 출력밖에 안한다면
mul2(1, 3, console.log);


// 강의 버전
const mul3 = (n1, n2, callback) => {
    if(callback) {
        return callback(n1 * n2);
    }
    return n1 * n2;
};

const result3 = mul(3, 4, (result)=> {result*2});
const result_3 = mul3(3, 4);
console.log(result3);
console.log(result_3);