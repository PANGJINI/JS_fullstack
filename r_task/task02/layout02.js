// 모듈화

const postLayout = (() => {
    const tbody = document.querySelector("table.postTable tbody");

    // 전체 게시글을 화면에 출력하기
    // service에서 전달한 users를 받아야 한다.
    const showList = (posts) => {
        // 추가될 데이터
        let text = ``;

        posts.forEach((post) => {
            // 회원 한 명의 정보를 하나의 <tr>에 담는다.
            text += `
                <tr>
                    <td>${post.userId}</td>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>
            `;
        })
        // 누적된 회원의 정보를 <tbody>에 출력한다.
        tbody.innerHTML = text;

        // 새로 추가된 게시글의 정보를 위해 text를 리턴한다.
        //return text;
    };


    return {showList: showList};
})();