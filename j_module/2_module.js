// 게시글
const postService = (() => {
    // 게시글 작성
    // 첨부파일
    const write = ({title, content, ...file}) => {};

    // 게시글 목록
    // 게시글 전부 다 가져오는게 아니라 몇 번째 페이지의 게시글이 필요한지 알아야 함
    const getList = (page) => {};

    // 게시글 조회
    // 몇 번 게시글인지 고유번호 필요
    const select = (id) => {};

    // 게시글 수정
    // 어떤 내용을 수정했는지 필요
    const updateList = (post) => {};

    // 게시글 삭제
    const deleteList = (id) => {};

    return {write:write, getList: getList, select:select, updateList:updateList, deleteList:deleteList};
})();