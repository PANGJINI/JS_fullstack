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

    // 회원 추가하기
    // 사용자가 입력한 회원 정보를 user 객체로 한번에 받는다.
    const create = async (user, callback) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', 
                            {
                                method: 'POST',
                                body: JSON.stringify(user),     //user를 객체로 받아온다
                                headers : {
                                    // Content-Type : request body에 어떤 타입의 데이터가 담겼는지 알려준다
                                    // json 객체가 담겼기 때문에 application/json
                                    'Content-Type': 'application/json; charset=utf-8'
                                }
                            });
        const createdUser = await response.json();

        if(callback) {
            return callback(createdUser);
        }

    };

    return { 
        findAll: findAll, create: create,
    };
})();