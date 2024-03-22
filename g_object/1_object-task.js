// (상품) => 상품번호, 상품명, 상품 가격, 상품을 구매한 회원
// (회원) => 회원번호, 아이디, 주소1, 주소2, 주소3
// 상품의 전체 정보를 출력하고, 회원 정보는 주소만 출력

// 회원 객체를 먼저 선언하고 상품 객체를 선언해야 함
// 그래프 탐색!

// 함수 function과 메서드 method는 같지 않다
// method는 어떤 영역 안에서 선언됨
// function 어떤 영역에 속해있지 않고 밖에 선언됨.

let member = {
        no: 1,
        id: "pang",
        address1: "경기도",
        address2: "부천시",
        address3: "소사구",
    };

let product = {
    no: 1,
    name: "에어팟",
    price: "개비쌈",
    //member: "황진",
    // member: {
    //     no: 1,
    //     id: "pang",
    //     address1: "경기도",
    //     address2: "부천시",
    //     address3: "소사구",
    // }
    member: member,

    printInfo: () => {
        console.log(product.no, product.name, product.price);
    },

    printAddress: () => {
        for(let i=0; i<3; i++) {
            console.log(product.member[`address${i+1}`]);
        }
    }
};


// 상품의 전체 정보 출력하기
// console.log(product);
product.printInfo();

// 회원 객체의 주소 정보만 출력하기 
// for(let i=0; i<3; i++) {
//     console.log(product.member[`address${i+1}`]);
// }
product.printAddress();


// 키 값 수정: 원래 있는 product.name 변수에 다른 값을 대입한다.
product.name = "육개장 먹고싶다";
// 키 추가 : 원래 없던 key값을 넣어준다.
product.newMethod = () => {
    console.log("new method 실행✨");
};

product.newMethod();


