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




    return { findAll: findAll };
})();