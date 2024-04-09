// 두 정수의 덧셈 결과 출력

// 더하는 기능
// function add(n1, n2, callback) {
//     if(callback) {
//         //const result = n1 + n2;
//         //callback(result);
//         callback(n1+n2);
//     }
//     return n1 + n2;
// }

// // 출력하는 기능
// function addResult(result) {
//     console.log(result);
// }

//콜백을 전달한 경우
//add(1, 2, addResult);
//콜백을 전달 안한 경우
// const result = add(1, 2);


//익명함수 사용해서 출력하기
// add(1, 2, function(result){
//     console.log(result);
// });



// function _add(n1, n2) {
//     return n1+n2;
// }
// const result = _add(1,2);
// console.log(result);



// 💛화살표 함수로 바꾸기 (수업시간에 못함)
const add = (n1, n2, callback) => {
    if(callback) {
        callback(n1+n2);
    }
    return n1 + n2;
};

add(1, 3, (result) => {
    console.log(result);
});