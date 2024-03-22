// 대카테고리 => 번호, 대카테고리명
// 소카테고리 => 번호, 소카테고리명, 대카테고리
// 대카테고리 1: 소카테고리 n
// 1:n 관계일 때는 소카테고리에 대카테고리를 넣어줌

let categoryA = {   //대카테고리
    number: 1,
    name: "봄",
}

let categoryB = {
    number: 5,
    name: "코드",
    categoryA: categoryA,
}

console.log(categoryB.categoryA.name);
console.log(categoryB.name);