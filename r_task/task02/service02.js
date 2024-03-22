// 모듈화

const postService = (() => {
    // 통신 목적
    // 전체 게시글을 조회한다.
    const findAll = async (callback) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'get'});
        const posts = await response.json();
        if(callback) {
            callback(posts);    
        }
    };

    return { findAll: findAll };
})();