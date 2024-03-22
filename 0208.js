//홀수를 짝수로, 짝수를 홀수로 변환해주는 함수


function change(number) {
    return ++number;
}

const result = change(10);
const message = result % 2 == 0 ? "짝수" : "홀수";

// if(result %2 == 0) {
//     console.log("짝수");
// } else {
//     console.log("홀수");
// }

console.log(message);




// default parameter
// 필수가 아닌 선택적 매개변수를 설정한다.
// 전달받은 값이 없을 경우 원하는 기본 값으로 설정할 수 있다.
// 필수 매개변수와 구분해주기 위해 뒤쪽에 선언해주어야 한다.
function add(n1, n2, n3=0) {
    return n1 + n2 + n3;
}

const result2 = add(1, 2);
console.log(result2);




// 아이디, 비밀번호, 닉네임을 전달받음
// 닉네임 기본값은 '익명'으로 설정함

function user(id, pw, nickname="익명") {
    console.log(id);
    console.log(pw);
    console.log(nickname);
}

const result3 = user("aaa", "1234", "배고파");
console.log(result3);


