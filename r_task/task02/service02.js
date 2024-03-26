// 모듈화

const postService = (() => {
    // 통신 목적
    // 전체 게시글을 조회한다.
    const findAll = async (callback) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'get'});
        const posts = await response.json();
        if(callback) {
            return callback(posts);    
        }
    };

    // 게시글 삽입
    // 사용자가 화면에서 입력한 정보를 post 객체로 한번에 받는다.
    const create = async(post, callback) => {
        await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: 'post',     //CRUD작업은 post로 요청
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        )   //fetch 끝
        // const createdPost = await response.json();
        // if(callback) {
        //     return callback(createdPost);
        // }
    }

    return { findAll: findAll, create: create };
})();