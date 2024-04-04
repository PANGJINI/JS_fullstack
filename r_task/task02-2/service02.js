const postService = (() => {
    
    // 전체 게시글 조회
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "get",
            }
        );
        const posts = await response.json();
        if (callback){
            callback(posts);
        }
    };

    // 게시글 삽입
    const create = async (post) => {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'post',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': "application/json; charset=utf-8"
            }
        });
    }

    // 게시글 조회
    const read = async (postId, callback) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();
        if(callback) {
            return callback(post);
        }
    }

    // 게시글 수정
    // 전체 수정
    const update = async (post) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${post.id}`,
            {
                method: "PUT",
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                } 
            }
        );
        const updatedPost = await response.json();
        console.log(updatedPost);
    }

    // 부분 수정
    // const update = async (post) => {
    //     const response = await fetch(
    //         `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    //         {
    //             method: "PATCH",
    //             body: JSON.stringify(post),
    //             headers: {
    //                 'Content-Type': 'application/json; charset=utf-8'
    //             } 
    //         }
    //     );
    //     const updatedPost = await response.json();
    //     console.log(updatedPost);
    // }

    return { findAll: findAll, create: create, read: read, update: update };
})();