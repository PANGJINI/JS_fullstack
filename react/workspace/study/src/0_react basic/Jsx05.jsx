import React from 'react';
import PassComponent from '../PassComponent';
import NotPassComponent from '../NotPassComponent';
import LuckyComponent from '../LuckyComponent';
import UnLuckyComponent from '../UnLuckyComponent';

// age는 상수로 나이를 설정
// 19세 이하라면 "입장불가", 성인이라면 "입장가능"
// age가 짝수라면 "당첨", 짝수가 아니라면 "꽝"

const Jsx05 = () => {
    const AGE = 18;

    // 비구조화 할당
    // const [pass, notPass, lucky, unLucky] = ['입장가능', '입장불가', '당첨', '꽝'];     // 비구조화 할당

    // 조건식을 변수에 담기
    const isAdult = AGE >= 19;
    const isEven = AGE%2==0;

    // 컴포넌트를 제작
    // 외부 파일에서 가져올 것임
    // const passComponent = (<div>{pass}</div>);      
    // const notPassComponent = (<div>{notPass}</div>);
    // const luckyComponent = (<div>{lucky}</div>);
    // const unLuckyComponent = (<div>{unLucky}</div>);

    // 삼항 연산자
    // jSX는 if문을 사용할 수 없기 때문에 삼항연산자를 지원한다.
    // 조건식 ? 참일 때 렌더링할 JSX : 거짓일 때 렌더링할 JSX
    // 조건식 && 참일 때 렌더링힐JSX, 거짓이면 아무것도 출력되지 않음
    // && 연산자의 앞의 조건식이 false이면 뒤를 실행하지 않으며, false라는 값은 렌더링되지 않음

    // const enter = isAdult ? pass : notPass;
    // const win = isEven ? lucky : unLucky;
    // const enter = isAdult ? passComponent : notPassComponent;
    const enter = isAdult ? <PassComponent /> : <NotPassComponent />;
    const win = isEven ? <LuckyComponent /> : <UnLuckyComponent />;

    return (
        <div>
            {/* { (AGE<=19) ? "입장불가 " : "입장가능" }
            { (AGE%2==0) ? "당첨" : "꽝" } */}

            {/* { isAdult ? pass : notPass }
            { isEven ? lucky : unLucky } */}

            {enter}
            {win}
        </div>
        
    );
};


export default Jsx05;