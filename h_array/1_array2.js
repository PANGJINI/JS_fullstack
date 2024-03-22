// 배열 선언시 메모리 공간을 확보하고 싶은 경우에
// new 키워드를 사용해서 배열을 선언한다.
// 이렇게 선언을 하게 되면 20칸의 empty 가 생성된다.

// 공간만 확보되었고 값은 아무것도 들어가있지 않기 때문에
// forEach, map 등의 반복을 진행해야 하는 프로퍼티는 동작하지 않는다.
// 따라서 미리 값을 세팅하기 위해서 fill(초기값)을 사용해준다.

let datas = new Array(20).fill(0);  //fill로 0으로 초기화
datas.forEach((data) => {
    console.log(data);
});



