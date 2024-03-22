// 선언과 동시에 사용
// (function() {}) ();

const module = function() {
    function a() {}
    function b() {}
    function c() {}
    function d() {}
    return {a:a, b:b, c:c, d:d}
}

module.a();
module.b();
module.c();
module.d();




const userService = (() => {
    // 회원가입
    // return 없어도 됨 (리턴을 한다 == 화면에 뿌려준다)
    const join = ({email, password, name}) => {};

    // 로그인
    // return 필요
    // 로그인 성공-실패 여부에 따라 다른 화면처리가 필요함.
    const login = (email, password) => {};

    // 마이페이지
    // 매개변수로 아무것도 받아올 필요가 없다.
    // 로그인을 해야 마이페이지에 접근 가능한데, 회원 정보는 로그인 시 세션(서버)에 담긴다.
    // 만약에 받아온다면 id.
    // id는 회원의 id가 아니라 고유한 uid를 의미함

    // return 필요함
    // 회원정보를 화면에 뿌려줘야하니까
    const select = () => {};

    // 회원수정
    // 수정 가능한 모든 정보를 화면에 뿌려줘야 하기 때문에 user 객체 전부 다 가져온다.
    // return 필요없음
    const update = (user) => {};

    // 회원탈퇴
    // 매개변수로 아무것도 받아올 필요가 없다.
    // 만약에 받아온다면 비밀번호
    // return 필요없음
    const remove = () => {};

    return { join: join, login: login, select:select, update:update, remove: remove }
})();

let user = {
    email: "pang@gmail.com",
    password: "1234",
    name: "test"
}

userService.join(user);
userService.login("pang@gmail.com", "1234");

