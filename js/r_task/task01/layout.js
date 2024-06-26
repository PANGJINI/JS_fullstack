// 모듈화

const userLayout = (() => {
    // 화면에 출력하기
    // service에서 전달한 users를 받아야 한다.
    const showList = (users) => {
        const tbody = document.querySelector("table.user-table tbody");

        // 추가될 데이터
        let text = ``;

        users.forEach((user) => {
            // 회원 한 명의 정보를 하나의 <tr>에 담는다.
            // 각 회원마다 상세보기로 이동할 수 있는 a태그를 만들어준다.
            text += `
                <tr>
                    <td>${user.id}</td>
                    <td><a class="go-detail" href="${user.id}">${user.name}</a></td>
                    <td>${user.address.street}</td>
                    <td>${user.address.suite}</td>
                    <td>${user.address.city}</td>
                    <td>${user.address.zipcode}</td>
                </tr>
            `
        })
        // 누적된 회원의 정보를 <tbody>에 출력한다.
        // tbody.innerHTML = text;

        // 새로 추가된 회원의 정보를 위해 text를 리턴해준다.
        return text;
    };

    // 새로 들어온 유저 정보 하나를 tbody에 출력해주는 역할
    const showCreatedUser = (createdUser) => {
        return `
                <tr>
                    <td>${createdUser.id}</td>
                    <td>${createdUser.name}</td>
                    <td>${createdUser.street}</td>
                    <td>${createdUser.suite}</td>
                    <td>${createdUser.city}</td>
                    <td>${createdUser.zipcode}</td>
                </tr>
            `
    }

    // 상세보기
    // 서버로부터 받아온 회원 1명의 정보를
    // 화면 형식에 맞는 태그(문자열)로 변경한다.
    const showUser = (user) => {
        return `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.street}</td>
                    <td>${user.suite}</td>
                    <td>${user.city}</td>
                    <td>${user.zipcode}</td>
                </tr>
            `
    }

    // 수정 화면
    const updateUser = (user) => {      //user:수정할 대상
        return `
                <tr>
                    <td>${user.id}</td>
                    <td><input type="text" value="${user.name}"></td>
                    <td><input type="text" value="${user.address.street}"></td>
                    <td><input type="text" value="${user.address.suite}"></td>
                    <td><input type="text" value="${user.address.city}"></td>
                    <td><input type="text" value="${user.address.zipcode}"></td>
                </tr>
            `
    }



    return {showList: showList, showCreatedUser: showCreatedUser, showUser:showUser,
    updateUser: updateUser };
})();