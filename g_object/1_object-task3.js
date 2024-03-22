// 게시글 => 번호, 제목, 내용
// 후기 => 번호, 내용, 별점(0~5)

let post = {
    no: 1,
    title: "웡카",
    content: "언제 보지",
}

let review = {
    no: 1,
    content: "ㅋㅋ",
    rating: 5,
    post: post,
}

console.log(review.post.title);