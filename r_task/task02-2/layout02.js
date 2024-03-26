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

    const showPost = (post) => {
        return `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>`;
    }

    return { showList: showList, showPost: showPost };
})();