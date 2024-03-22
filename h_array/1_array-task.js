// 1️⃣datas Array객체 선언
let datas = [];

// datas에 1~5까지 값을 담은 뒤
// 값을 넣는 부분
for( let i=0; i<5; i++ ) {
    //datas[i] = i+1;
    datas.push(i+1);
}
console.log(datas);

// 각 값에 +5를 해서 출력하기
// 값을 사용하는 부분
for(let data of datas) {
    console.log(data+5);
}



// 2️⃣datas2 배열 객체 선언
let datas2 = [];

// 1~10 중 짝수만 datas2에 담음
for(let i=0; i<5; i++) { 
    datas[i] = (i+1) * 2;
}
console.log(datas);

// datas의 모든 요소(값)를 :으로 연결해서 출력한다.
console.log(datas.join(":"));



// 3️⃣datas3 객체 선언
// datas3에 1~10 담기
let datas3 = [];

for(let i=0; i<10; i++) {
    datas3[i] = i + 1;
}
console.log(`datas3 : ${datas3}`);

// 첫번째 값을 제외한 나머지 요소 추출하기
let _datas3 = datas3.slice(1);
console.log(`datas3에서 첫번째 값 제외한 요소를 추출 : ${_datas3}`);

// 추출한 array 객체에서 홀수만 출력한다.
for(let data of _datas3) {
    if(data % 2 == 1)
    console.log(data);
    // data % 2 == 1 && console.log(data);
}



// 4️⃣datas4에 1~10 담기
// datas4에서 짝수만 삭제하기
let datas4 = [];
for (let i=0; i<10; i++) {
    datas4[i] = i + 1;
}
console.log(`datas4 : ${datas4}`);

// for(let data of datas4) {
//     if (data % 2 == 0) {
//         console.log(data);
//         datas4.splice(data, 1);
//     }
// }

// 뒤에서부터 삭제해야 인덱스값이 그대로 유지됨
// for (let i = datas4.length - 1; i >= 0; i--) {
//     if (datas4[i] % 2 === 0) {
//         datas4.splice(i, 1);
//     }
// }

// 💛강의 버전
// 인덱스 0 1 2 3 4
// 삭제값 1 3 5 7 9
for(let i=0; i<5; i++) {
    datas4.splice(i+1, 1);
}

console.log(`splice 후 datas4 : ${datas4}`);



// 5️⃣datas5에 1~10
// 홀수값은 2를 빼서 출력하기
let datas5 = [];
for (let i=0; i<10; i++) {
    datas5[i] = i + 1;
}
console.log(`datas5 : ${datas5}`);

// ❤내꺼
// for(let i of datas5) {
//     console.log(i);
//     if(i % 2 == 1) {
//         console.log(`선택된 i : ${i}, datas5 : ${datas5}`);
//         datas5.splice(i-1, 1, i-2);
//     }
// }

// 💛강의버전
for(let i in datas5) {
    if(i % 2 == 0) {
        datas5.splice(i, 1, datas5[i]-2);
    }
}
console.log(`splice 후 datas5 : ${datas5}`);