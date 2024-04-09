const userService = (() => {
    //전체 회원을 검색하는 함수
    //then을 사용하지 않고 ✨asnyc 키워드를 사용하면 findAll 함수 자체가 비동기 환경이 된다.
    const findAll = async (callback) => {
        //✨await 키워드 : fetch의 결과를 response에 담을 때 까지 기다려라
        //promise 객체의 resolve 결과값을 가져와준다.
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");    
        const users = await response.json();

        if(callback) {
            callback(users);
        }
    };

    //id를 전달받아서 특정 회원 정보를 찾아주는 함수
    const findById = async (id, callback) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.json();

        if(callback) {
            callback(user);
        }
    };

    return {findAll:findAll, findById:findById};
})();

// userService.findAll(console.log);
// userService.findById(3, console.log);