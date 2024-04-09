// 회원 => 번호, 이름
// 게시글 => 번호, 제목, 내용, 회원
// 좋아요 => 번호, 회원, 게시글

let user = {
    id: 1,
    name: "황진",
}

let post = {
    id: 1011,
    title: "진짜 너무 배고픔",
    content: "마라탕마라탕",
    user: user,
}

let like = {
    id: 10,
    user: user,
    post: post,
}

