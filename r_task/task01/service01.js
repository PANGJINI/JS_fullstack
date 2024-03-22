// 모듈화

const userService = (() => {
    // 통신 목적
    // 전체 회원을 조회한다.
    const findAll = async (callback) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'});
        const users = await response.json();
        if(callback) {
            //users를 바깥에서도 사용하기 위해 콜백함수로 전달한다.
            //users를 Array로 전달한다.
            callback(users);    
        }
        //return users;   //user 객체를 Promise 객체로 전달함
    };


    //회원가입 서비스
    //화면에서 입력한 회원 정보를 user 객체로ㅓ 한번에 받는다
    const create = async (user, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: 'post',     //post로 요청해줘야 한다.
                body: JSON.stringify(user),     //user를 그냥 객체로 받아
                headers: {  //header는 객체를 담는다
                    //Content-Type에는 request body에 어떤 타입의 데이터가 담겼는지를 알려준다.
                    //json 객체가 담겼기 때문에 application/json, 숫자가 담긴다면 number, 
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        )
        //추가된 회원의 정보를 createdUser객체에 담는다.
        const createdUser = await response.json();

        //콜백함수에 추가된 회원 객체를 전달한ㄷ.
        //화면에 출력하기 위함
        if(callback) {
            return callback(createdUser);
        }
    }




    return { findAll: findAll, create: create };
})();