const postLayout = (() => {
    const showList = (posts) => {
        console.log(posts);

        const tbody = document.querySelector("table.post-table tbody");
        let text = ``;

        posts.forEach((post) => {
            text += `
                <tr>
                    <td>${post.id}</td>
                    <td><a class="go-detail" href="${post.id}">${post.title}</td>
                    <td>${post.body}</td>
                </tr>
            `
        });
        tbody.innerHTML = text;
    };

    // 상세정보 레이아웃
    const showPost = (post) => {
        return `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>`;
    }

    // 수정페이지 레이아웃
    const updatePost = (post) => {
        return `
                <tr>
                    <td>${post.id}</td>
                    <td><input type="text" value="${post.title}"></td>
                    <td><textarea cols=70>${post.body}</textarea></td>
                </tr>
            `;
    }

    return { showList: showList, showPost: showPost, updatePost:updatePost };
})();