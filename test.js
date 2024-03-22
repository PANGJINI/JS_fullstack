// let arr = [ 10, 20, 30, 40, 50 ];
// console.log(arr);

// arr.forEach((value, i, datas) => {
//     console.log(value, i, datas);   //i번째 인덱스의 값, 인덱스, 원본객체
//     datas[i] = value+1;
// })
// console.log(arr);



// // for(let i=0; i<arr.length; i++) {
// //     arr[i] += 1;
// // }
// // console.log(arr);


//1. datas 배열 선언
// let datas = [];

// //for문으로 1~5 넣기
// for(let i=0; i<5; i++) {
//     datas[i] = i+1;
// }
// console.log(datas);

// //객 값에 +5를 해서 출력하기
// //forEach 사용하기
// // datas.forEach((value, i, datas)=> {
// //     datas[i] = value + 5;
// // })
// // console.log(datas);

// //for of 사용하기
// for(let data of datas) {
//     console.log(data + 5);
// }





// //2. datas 배열 선언
// let datas = [];

// //1~10중 짝수만 datas2에 답기
// // i : 0 1 2 3 4
// //     2 4 6 8 10
// for(let i=0; i<5; i++) {
//     datas[i] = (i+1) *2;
// }
// console.log(datas);

// //datas2의 모든 요소를 :으로 연결해서 출력하기
// console.log(datas.join(":"));



// //3. datas 객체 선언하고 1~10 담기
// let datas = [];
// for(let i=0; i<10; i++) {
//     datas[i] = i+1;
// }
// console.log(datas);

// //첫번째 값을 제외한 나머지 요소 추출하기
// let datas2 = datas.slice(1);

// //🧡추출한 array 객체에서 홀수만 출력하기
// // i 0 1 2 3 4 5 6 7 8
// //   2 3 4 5 6 7 8 9 10
// for(let data of datas) {
//     if(data % 2 == 1)
//         console.log(data);
// }



// //4. datas에 1~10 담기
// let datas = [];
// for(let i=0; i<10; i++) {
//     datas[i] = i+1;
// }
// console.log(datas);

// //🧡짝수만 삭제하기
// // i : 0 1 2 3 4 5 6 7 8 9
// //     1 2 3 4 5 6 7 8 9 10
// // data가 짝수인 경우에 삭제
// for(let i=0; i<datas.length; i++) {
//     datas.splice(i+1, 1);
// }
// console.log(datas);
// const result = datas.map((data) => {
//     console.log(data);
//     return data+3;
// });
// console.log(result);
// let datas = [1, 2, 3, 4, 5];



// const result = datas.filter((data) => {
//     console.log(data);
//     return data%2==1;
// });
// console.log(result);


// 1️⃣회원정보
// 번호, 이름, 나이
// 1, user1, 18
// // 2, user2, 19
// // 3, user3, 20
// function User(no, name, age) {
//     this.no = no;
//     this.name = name;
//     this.age = age;
// }

// let users = [];
// for(let i=0; i<3; i++) {
//     users[i] = new User( i+1, `user${i+1}`, 19+i );
// }
// console.log(users);

// // 회원 목록 중 회원 이름만 출력
// users.forEach((value, i, users) => {
//     console.log(users[i].name);
// })

// // 회원 목록 중 나이가 20살 이상인 회원 추출 후 전체 정보 출력
// const ageOver20 = users
//     .filter((users) => users.age>=20)
//     .forEach((user) => {
//         console.log(`${user.no}. ${user.name} : ${user.age}살`);
//     })
// //console.log(ageOver20);


// 2️⃣상품정보
// 번호, 상품명, 가격, 구매회원
// 3, 상품1, 3000, user1
// 8, 상품3, 1000, user2
// function Product(no, name, price, user) {
//     this.no = no;
//     this.name = name;
//     this.price = price;
//     this.user = user;
// }

// let products = [new Product(3, "상품1", 3000, users[0]), 
//                 new Product(8, "상품3", 1000, users[1])];
// console.log(products);

// // 상품 목록을, 상품을 구매한 구매 회원의 목록으로 변경한다.
// const buyers = products.map((products) => {
//     console.log(products);
//     return products.user
// })
// console.log(buyers);

// // 구매자의 전체 정보를 출력한다.
// buyers.forEach((user) => {
//     console.log(`${user.no}. ${user.name} : ${user.age}살`);
// })








// let datas = [1, 2, 3, 4, 5];

// // 1부터 5의 합
// // let result = datas.reduce((previous, current, i) => {
// //     console.log(previous, current, i);  //1 2 1 출력
// //     return previous+current;
// // })
// // console.log(result);



// const result4 = datas.reduce((variable, data, i) => {
//     //variable.push(i+1);
//     console.log(variable, data, i);
//         //[ ] 1 0   [1] 2 1   [1, 2] 3 2
//     variable[i] = i + 1;
//     return variable;
// }, []);     //variable에 빈 배열 전달
// console.log(`result4 : ${result4}`);


// datas = [1, 2, 3, 4, 5];
// const result6 = datas.reduce((variable, data, i) => {
//     variable[`data${i+1}`] = `황진${i}`;
//     return variable;
// }, {});     //variable에 객체 전달
// console.log(result6);







// // 3️⃣1~100까지 합 출력
// let numbers = new Array(100).fill(0).map((data, i) => data[i]=i+1)
// console.log(numbers);

// const result = numbers.reduce((variable, number) => {
//     return value + number;
// })
// console.log(result);

// let numbers = [1, 2, 3, 4];
// console.log(numbers);

// const [n1, n2, n3, n4] = numbers;
// console.log(numbers, n1);

// let user = {
//     id:1,
//     name:"pang",
// }

// const {id, name} = user;
// console.log(name);
// // user.name, user.id를 사용할 필요가 없이
// // 바로 id, name 프로퍼티로 접근할 수 있다.

// // 보통 함수의 매개변수에 스프레드가 사용된다.
// function prt({id, name}) {
//     console.log(id, name);
// }
// prt(user);


//✨✨✨ 배열에 rest 사용할 때

// let numbers = [10, 20, 30];

// function getTotal(...numbers) {
//     //const [number1, ...rest] = numbers;
//     console.log(numbers1);
//     console.log(numbers);
// }

// // 출력 결과 [ [ 10, 20, 30 ] ]
// // numbers의 0번째 index에 numbers 배열이 통째로 들어가는 것
// getTotal(numbers);

// // 출력 결과 [ 10, 20, 30 ]
// // 배열의 각 요소가 numbers 배열의 각 index로 나눠져서 들어간다!!
// getTotal(...numbers);



const promise = new Promise((resolve, reject) => {  //promise 객체는 함수를 매개변수로 전달받는다.
    resolve("마라탕^!^");   // 성공적으로 resolve가 호출되면 문자열을 리턴한다.
})

// 💜promise 객체 사용하는 방법
// then 메서드는 promise 객체가 성공할 때의 결과를 가져온다. 즉, reslove 값을 가져온다.
promise.then( (result) => {
    console.log(result);
})


// 💖fetch
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((response) => response.json())    //웹에 있는 데이터를 JS객체화 해주고, 그 결과가 response에 담긴다.
// .then((data) => {                       //위의 then 메서드의 리턴값인 response가 data에 담긴다.
//     let dataCompleted = data.filter(todos => todos.completed===true)
//     console.log(dataCompleted);
// })


// 💖하나의 함수는 하나의 목적만 가지도록 분리하기
// 통신 목적 (DB에서 정보만 받아오고, 그 결과를 다음 함수로 넘겨준다. 따라서 콜백함수 사요해야 함)
const getTodos = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {       //DB에서 받아온 정보를
        if(callback)        //콜백함수로 전달함
            callback(data);
    })
}

const getTodoCompleted = (data) => {    //콜백 함수로부터 data를 전달받는다.
    let dataCompleted = data.filter(todos => todos.completed===true)
    console.log(dataCompleted);
}

//getTodos(getTodoCompleted);