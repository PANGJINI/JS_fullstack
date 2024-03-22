

let userLayout = (() => {
    const showList = (users) => {   //findAll 함수에서 전달한 콜백함수의 값을 사용하는 것
        users.forEach((user) => {
            console.log(user.id);   //users객체에서 id값만 출력한다.
        });
    }
    return {showList:showList};
})();