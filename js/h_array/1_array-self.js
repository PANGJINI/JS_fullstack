// 5️⃣datas5에 1~10
// 홀수값은 2를 빼서 출력하기
let datas5 = [];
for (let i=0; i<10; i++) {
    datas5[i] = i + 1;
}
console.log(`datas5 : ${datas5}`);

// ❤내꺼
// ❤i of datas5로 하게 되면 실제 i 값과 인덱스 값이 다르기 때문에 헷갈린다.. 비효율적인듯 
for(let i of datas5) {
    console.log(`i : ${i}     datas5 : ${datas5}`);    //datas5의 값을 i에 가져온다.
    if(i % 2 == 1) {    // 값이 홀수일 때
        console.log(`선택된 i : ${i}`);
        datas5.splice(i-1, 1, i-2);
        console.log(`      datas5 : ${datas5}`);
    }
}

// 💛강의버전
// for(let i in datas5) {
//     console.log(`i : ${i}     datas5 : ${datas5}`);    //datas5의 인덱스를 i에 가져온다.
//     if(i % 2 == 0) {    // 인덱스 번호가 짝수일 때
//         datas5.splice(i, 1, datas5[i]-2);   // 해당 인덱스에 들어있는 "값"에 -2
//     }
// }

console.log(`splice 후 datas5 : ${datas5}`);