const userService = (() => {
    //전체 회원을 검색하는 함수
    const findAll = async (callback) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");  //통신
        const users = await response.json();  //response의 결과를 js 객체로 받아와서 user에 넣는다.

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

    return {findAll:findAll, findById:findById}
})();


let userLayout = (() => {
    const showList = (users) => {
        users.forEach((user) => {
            console.log(user.id);
        })
    };
    return {showList:showList}
})();