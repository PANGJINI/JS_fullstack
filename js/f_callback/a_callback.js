// 콜백함수의 목적은 분리이다.

// 이름을 전달받은 뒤 이름을 출력하는 서비스
function setName(name, callback) {
    // name에는 값이 들어오고, callback에는 함수(주소값)가 들어온다.
    if (callback) {
        // 만약 setName이 사용될 때, callback자리에 함수를 전달했다면,
        // setName에서 받은 name(결과값)을 callback에 전달해준다.
        callback(name);
    }
}

function printName(name) {
    console.log(name);
}

setName("한동석", printName);



// 익명함수
// 일회성으로 사용하고자 할 때 이름(식별자) 없이 선언한다.
setName("황진", function(name) {
    console.log(name);
});

// 재사용 불가
setName("나재민", (name) => {
    console.log(name);
});

// 재사용 가능하려면?
const printName2 = (name) => {
    console.log(name);
};
setName("김도영", printName2);


() => {console.log();};
//이 형태가 함수임.. 근데 이름이 없음
//이름을 적어주면 됨
//sayHello 변수에 함수 주소값을 담는 형태임
const sayHello = () => {
    console.log("hi");
};



