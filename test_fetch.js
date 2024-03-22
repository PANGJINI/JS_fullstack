// << Promise 객체의 필요성 >>
// JS의 통신 및 DB 접근은 비동기로 되어 있다.
// 비동기 코드의 결과가 Promise 객체에 담기기 때문에 Promise를 사용해야 한다.


// << fetch >>


console.log(fetch('https://jsonplaceholder.typicode.com/todos/1'));
// 출력 결과
// Promise { <pending> }
// pending은 대기중이라는 의미이다.
// 통신 결과를 모두 가져올 때 까지 대기한다.


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    response.json;
})
// Promise 객체를 사용할 때,
// then 객체는 성공했을 때의 결과를 가져온다.
// Promise의 relsove 값을 가져오는 것이다.
// 위 코드는 fetch가 성공하면 그 결과를 가져와서 json이 객체화 해준다.


const user = {
    id:3,
    name : "황진",
}
console.log(user);      // 출력 결과 { id: 3, name: '황진' }
console.log(JSON.stringify(user));      // 출력 결과 {"id":3,"name":"황진"}
// JSON 객체는 키 값을 ""로 감싸주기 때문에 일반 JS 객체와 구분할 수 있다.


fetch('https://jsonplaceholder.typicode.com/todos/1')   // 해당 웹 주소와 통신을 해서
.then((response) => response.json())        // 통신 결과를 json 객체로 response에 담는다.
.then((post) => {
    console.log(post);      // 웹에서 가져온 전체 결과를 출력한다.
    console.log(post.title);    // 키 값을 .으로 접근해 원하는 정보만 출력할 수 있다.
})


// 💖https://jsonplaceholder.typicode.com/users에서
// zipcode만 추출해서 출력하기
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((user) => {
    let zipcodes = user.map(user => user.address.zipcode);
    console.log(zipcodes);
})


// 💖comments에서
// 게시글 번호postId가 10번인 댓글 전체 출력
fetch('https://jsonplaceholder.typicode.com/comments')
.then((response) => response.json())
.then((comment) => {
    let result = comment.filter((comment) => comment.postId==10);
    console.log(result);
})