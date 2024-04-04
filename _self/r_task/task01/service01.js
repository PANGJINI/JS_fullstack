// userService 모듈화 목적 : 통신
const userService = (() => {
    // 전체 회원 조회
    const findAll = async (callback) => {
        // 외부 서버에 회원 데이터를 요청함
        // 요청 method를 생략할 경우 기본 요청방식은 GET
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // 응답 데이터를 JSON 형식으로 변환
        const users = await response.json();

        // 가져온 회원 데이터(users)를 callback에 전달
        if(callback) {
            return callback(users);
        }
    };

    return { 
        findAll: findAll,
    };
})();