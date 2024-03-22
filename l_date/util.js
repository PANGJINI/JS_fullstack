function timeForToday(datetime) {
    const today = new Date();
    //외부에서 전달받은 datetime을 new Date()에 넣어주면 날짜 형식으로 바뀐다.
    //날짜 형식으로 바뀌면 날짜 간 연산이 가능해진다.

    const date = new Date(datetime);    
    let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);  //Math.floor : 소수점 버리기
    
    if(gap < 1) {   //1분 미만인 경우
        return "방금 전";
    }
    if(gap < 60) {
        return`${gap}분 전`;
    }
    
    gap = Math.floor(gap/60);
    if(gap < 24) {
        return `${gap}시간 전`;
    }

    gap = Math.floor(gap/24);
    if(gap < 31) {
        return `${gap}일 전`;
    }

    gap = Math.floor(gap/31);
    if(gap < 12) {
        return `${gap}개월 전`;
    }

    gap = Math.floor(gap/12);
    return `${gap}년 전`;
    
}

const result = timeForToday("2020-02-29T19:15:00");
console.log(result);