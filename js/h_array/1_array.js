// Array : 배열 객체 (저장공간의 나열)
// 내가 객체를 만들 때는 name: "황진", 처럼 key: value를 만들어줘야 했음.
// 하지만 배열은 key를 알아서 생성해준다.
// 인덱스 번호로 키 값에 접근할 수 있다.

// let datas = new Array();
let datas = [];
datas = [10, 20, 15, 30, 25];

console.log(datas[0]);
console.log(datas[1]);
console.log(datas[2]);

for(let i=0; i<datas.length; i++) {
    console.log(`반복${i+1} : ${datas[i]}`);
}

for(let i in datas) {
    console.log(i);  //index 번호가 필요할 때 0~5 출력
}

for(let data of datas) {
    console.log(data);  //배열의 값이 필요할 때 출력
}


// push(추가할 값) : 가장 마지막에 값 추가
datas.push(100);
console.log(datas);


// join(구분할 값) : 전달한 값으로 각 요소를 구분한 뒤 문자열로 리턴한다.
console.log(datas.join(","));       // 10,20,15,30,25,100


// slice(begin, end) : 시작인덱스 ~ 끝 인덱스-1 를 추출함
// slice(begin) : 시작인덱스 ~ 마지막 인덱스 추출
// 인덱스가 음수라면 뒤에서부터 찾는다.
// 마지막 인덱스가 -1, 뒤에서 두 번째 인덱스가 -2
console.log(datas.slice(0, 2));     // [ 10, 20 ]
console.log(datas.slice(1, -1));     // [ 20, 15, 30, 25 ]


// splice(index, count) : 삭제
// splice(index, count, ...args) : 교체 (값 삭제 후 삽입)
// [10, 20, 15, 30, 25, 100]
datas.splice(1, 1);
console.log(datas);     // 1번 인덱스가 삭제된다.

datas.splice(0, 1, 9999);
console.log(datas);     // 0번 인덱스의 값이 9999로 교체된다.


// indexOf(value) : value를 해당 Array 객체에서 찾은 뒤 인덱스 번호를 리턴한다.
//                  못찾으면 -1을 리턴
// datas [ 9999, 15, 30, 25, 100 ]
console.log(datas.indexOf(9999));   //0
console.log(datas.indexOf(-9999));  //-1


// 💖forEach(callback) : 
// 전달한 callback 함수의 매개변수에 값, 인덱스, 원본객체를 전달한다.   "반복"
// datas [ 9999, 15, 30, 25, 100 ]

//datas.forEach((_, i, datas) => {
//순서상 매개변수를 작성해야 하지만, 해당 매개변수를 사용하지 않는다면 _언더바를 사용한다.
datas.forEach((data, i, datas) => {
    datas[i] = i + 1;
});
console.log(datas);

datas.forEach((data, i, datas) => {
    console.log(`data : ${data}`);
});


// 💖map(callback) : 기존 값을 callback함수의 리턴값으로 변경시킨다.   "수정 / 변경"
//                    작업이 완료된 Array 객체를 리턴한다.
// datas [ 1, 2, 3, 4, 5 ]

const result = datas.map((data) => {
    return data + 3;
});
// 함수 안에 리턴만 있는 경우 중괄호와 리턴 생략 가능
console.log(result);


// 💖filter(callback) : 전달한 callback함수의 리턴값이 true일 때만 해당 값을 추출함.    "조건"
// datas [ 1, 2, 3, 4, 5 ]

// 홀수만 추출할거임
const result2 = datas.filter((data) => data%2==1 );
console.log(result2);



// ✨reduce(callback) : callback 함수의 첫 번째 매개변수에 callback의 리턴값이 들어간다.

// reduce(callback, initValue) : 전달한 callback 함수의 매개변수에 4가지를 전달할 수 있음.
//                    1) 초기값 설정     2) array 객체의 각 값
//                    3) 두 번째 매체변수에 들어온 값의 인덱스     4) 원본 Array 객체

// 만약 initValue를 작성한다면, 첫번째 매개변수에 initValue가 들어간다.
// datas [ 1, 2, 3, 4, 5 ]

const result3 = datas.reduce((variable, data, i) => {
    console.log(variable, data, i);
    return variable + data;     // return값이 variable에 전달된다.
});
console.log(`result3 : ${result3}`);

const result4 = datas.reduce((variable, data, i) => {
    //variable.push(i+1);
    variable[i] = i + 1;
    return variable;
}, []);     //variable에 배열 전달
console.log(`result4 : ${result4}`);
console.log(result4);


datas = ["안", "녕", "하", "세", "여"];
const result5 = datas.reduce((variable, data) => {
    return variable + data;
});     //variable에 "안" 전달
console.log(result5);


datas = [1, 2, 3, 4, 5];
const result6 = datas.reduce((variable, data, i) => {
    variable[`data${i+1}`] = `황진${i}`;
    return variable;
}, {});     //variable에 객체 전달
console.log(result6);


