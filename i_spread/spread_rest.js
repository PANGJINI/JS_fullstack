// 🧡file B
// B의 외부에 있는 A 파일에 접근하려면

// const buttonComponent = (styles) => {
//     styles.color
//     styles.border
//     // styles. 를 계속 적어줘야함
//     // 개불편
// };


// 스프레드로 받기1️⃣ 
// const buttonComponent = ({color, border, margin}) => {
//    console.log(color, border, margin);
// };


// 스프레드로 받기2️⃣
// 여러 매개변수를 받을 경우 이 방법이 보기 편하다
const buttonComponent = (styles, texts) => {
    const {color, border, margin} = styles;
    const {normal, hover} = texts;

    console.log(color, border, margin);
    console.log(normal, hover);
 };
 

// 🧡file A
let styles = {
    color: "red",
    border : "1px solid black",
    margin : "0 auto"
}

let texts = {
    normal: "닭갈비",
    hover: "[할인] 닭갈비",
};

// buttonComponent(styles);
buttonComponent(styles, texts);





// 💛fileB
// productComponent 라는 함수 선언 후 상품 정보 받기
// const productComponent = (product) => {
//     const {id, name, price, discount} = product;
//     console.log(`${id}. ${name} : ${price}원 (${discount}% 할인)`);
// }

// 가격에 할인 비율을 적용하고 싶다면
const productComponent = ({price, ...product}, discount) => {
    return {
        ...product,
        price: price, //추가
        discount: discount, //수정
        sellPrice: price * (1 - discount / 100),    //원래 product에 sellPrice가 추가
    };
};


// 💛fileA
// 상품
// 번호, 상품명, 가격, 할인율
let product = {
    id: 1,
    name: "아메리카노",
    price: 2500,
    discount: 20,
};

product = productComponent(product, 20);
console.log(product);





// 💚fileB
// categoryComponent 함수 선언 후 카테고리 정보 받기
// 이름을 다른 이름으로 변경해서 리턴하기
const categoryComponent = ({...category}, name) => {
    return {
        ...category,
        name: name,
    }
}
// ✨강의 코드


// 💚fileA
// 카테고리
// 번호, 이름
let category = {
    id: 1,
    name: "category 1. ",
};

category = categoryComponent(category, "변경된 카테고리명");

// 변경된 카테고리 이름 출력하기
console.log(category);





// 💜fileB
const categoryComponent2 = (...categories) => {     //몇 개의 매개변수가 들어올지 모르는 경우에 rest문법 사용
    const [category1, ...rest] = categories;
    console.log(category1);

    for (let category of rest) {
        console.log(category);
    }
};


// 💜fileA
globalThis.id = 0;  //id값 자동 증가시키기 위해 필요

function Category(name) {
    this.id = ++id;
    this.name = name;
}

let categories = [
    new Category("c1"), 
    new Category("c2"), 
    new Category("c3"), 
    new Category("c4")
]

// rest 문법으로 풀어주지 않으면
// categories 배열이 통째로 전달된다.
// 각 요소를 풀어서 전달해야 한다.
categoryComponent2(...categories);



