// URL : 요청 경로
// URI : URL에서 IP와 포트번호를 제외한 나머지


// console.log(fetch('https://jsonplaceholder.typicode.com/todos/1'));
// 출력 결과  Promise { <pending> }
// pending : 대기중...


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response) => {
//     response.json;
// })



// ✨JSON
const user = {
    id: 3, name:"황진",
}

// console.log(JSON.stringify(user));
// 출력 결과 {"id":3,"name":"황진"}
// JSON 객체는 키 값에 ""가 들어가서 JS 객체와 구분할 수 있다.

// console.log(user);
// 출력 결과 { id: 3, name: '황진' }

const json_data = JSON.stringify(user); //json 객체를 받아오기
const object = JSON.parse(json_data);   //json 객체를 object로 변환하기
console.log(object.name);


// 쓸 때마다 parse 로 바꿔주기 귀찮음
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
    response.json().then((post) => {  // .json이 이걸 객체화 해주는 애임^_____^
        console.log(post.title);
    });      
})

// 가독성
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())    // return값인 response.json()가
.then((post) => {                       // (post)로 다시 들어간다. 따라서 post에는 해당 페이지의 데이터가 출력됨
    console.log(post);
    console.log(`간편화 : ${post.title}`);
})

