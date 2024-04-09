// 💖https://jsonplaceholder.typicode.com/users에서
// zipcode만 추출해서 출력하기

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((data) => {
//     let zipcodes = data.map(user => user.address.zipcode);
//     console.log(zipcodes);
// })



// 💖/comments에서
// 게시글 번호postId가 10번인 댓글 전체 출력
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then((response) => response.json())
// .then((data) => {
//     let result = data.filter(comment => comment.postId==10);
//     console.log(result);
// })



// 각 결과를 console.log(1) 다음에 출력하게 하기
// 이 때 직접 만든 함수에서 작업한다.

// function test() {
//     console.log(결과);
//     console.log(1);
// }

// 출력 예시
// 결과
// 1

// 💖모듈화 목적!!(모듈화는 아님) 하나의 함수에 하나의 목적만 가지도록 하자
// zipcode만 추출해서 출력하기
// 통신 목적. DB에서 유저 정보만 받아오고 그 결과를 다음 함수로 넘겨준다.
const getUsers = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            if(callback) {
                callback(data);
            }
    })
}

// 전달받은 유저 정보를 가지고 Zipcode 결과만 가져온다.
const getZipCodes = (data) => {
    let zipcodes = data.map(user => user.address.zipcode);
    console.log(zipcodes);
    console.log(1);
}

getUsers(getZipCodes);



// 게시글 번호postId가 10번인 댓글 전체 출력
const getComments = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((comments) => {
            if (callback) {
                callback(comments);
            }
        });
};

const getCommentsByPostIdIs10 = (comments) => {
    console.log(comments.filter((comment) => comment.postId === 10));
    console.log(1);
};

getComments(getCommentsByPostIdIs10);