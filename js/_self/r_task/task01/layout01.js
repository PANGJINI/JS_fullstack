const userLayout = (() => {
    // 전체 회원 목록 출력하기
    const showUserList = (users) => {
        const tbody = document.querySelector("table.user-table tbody");

        // 추가될 데이터 (회원 목록)
        let text = ``;

        // jsonplaceholder 서버에서 실제로 데이터를 가져온다
        // 회원 한 명의 정보를 각각의 <tr> 태그에 담는다
        users.forEach((user) => {
            text += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>${user.phone}</td>
                    <td>${user.company.name}</td>
                </tr>
            `;
        })

        // 회원 목록이 들어있는 text를 리턴해준다
        return text;
    };


    // 회원 1명의 정보 출력하기
    // 서버로부터 받아온 회원 1명의 정보를 화면 형식에 맞는 태그(문자열)로 변경한다.
    // showUserList의 user와는 다름. showUserList에는 jsonplaceholder에 있는 원시데이터의 users 하나를 user에 담은 것
    // 이 user는 사용자의 입력값을 user 객체로 받아온 것
    const showUser = (user) => {
        return `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.city}</td>
                <td>${user.phone}</td>
                <td>${user.company}</td>
            </tr>
            `;
    };


    return {
        showUserList: showUserList, showUser:showUser, 
    };
})();