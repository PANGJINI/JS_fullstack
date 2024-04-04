const userLayout = (() => {
    // 전체 회원 목록 출력하기
    const showList = (users) => {
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

    return {
        showList: showList
    };
})();