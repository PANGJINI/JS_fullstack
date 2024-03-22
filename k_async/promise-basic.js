// const promise = new Promise((resolve, reject) => {
//     let check = true;
//     if(check) {
//         resolve("안녕");
//     } else {
//         resolve("잘가");
//     }
// });

// promise
//     .then((result) => {
//     console.log(result);
//     })
//     .catch((result) => {
//     console.log(result);
//     })



// ✨프로그램
// 실행이 되지 않은 상태

// 프로세스
// 실행된 프로그램

// 쓰레드
// 프로세스 처리 경로

// 단일쓰레드
// 처리 경로가 하나

// 스케쥴링 -> 단일쓰레드를 멀티쓰레드가 가능하게 함

// 멀티쓰레드
// 처리 경로가 여러개

// 동기 (Synchronized, in 멀티쓰레드)
// 모든 쓰레드가 하나씩 처리하도록 한다 (단일쓰레드처럼 사용)

// 비동기 (ASynchronized, in 멀티쓰레드)
// 모든 쓰레드가 순서가 없는 것 처럼 동작한다
// js에서 비동기프로그래밍 필요한 이유 -> 통신, DB 서버 접근을 위해




// const promise = new Promise((resolve, reject) => { //Promise 객체는 함수를 전달받는다
//     // 성공했을 때
//     resolve("성공");

//     // 실패했을 때
//     // 오류가 날 확률이 없다면 b객체는 매개변수로 전달받지 않아도 된다.
//     reject("실패");
// });


const promise = new Promise((resolve, reject) => {
    let result  = 1+1;
    resolve(result);
});

// 💖💖promise 객체 사용하는 법
// then 함수는 성공할 때의 결과를 가져옴
// promise의 resolve를 가져온다.

// 동기 a
let data = 0;

// 비동기 a
promise.then( (result) => {
    data = result;
    console.log(`result : ${result}`);
})

// 동기 b
console.log(`data : ${data}`);

// 출력결과
// data:0    result:2
// promise 객체가 비동기이기 때문에 data가 먼저 출력된다.

//promise.then(console.log);



// ✨동기 코드의 실행 흐름과 비동기 코드의 실행 흐름이 나누어져 있다.
// promise 객첼츨 사용하는 이유는 js로 통신 및 db 접근이 비동기로 되어있기 때문이다.
// 이 때 비동기 코드의 결과가 promise 객체에 담기기 때문에 promise를 사용해야 한다.