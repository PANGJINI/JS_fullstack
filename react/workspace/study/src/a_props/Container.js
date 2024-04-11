import React from 'react';
import Component01 from './Component01';
import Component02 from './Component02';
import Component03 from './Component03';

const Container = () => {
    // 컴포넌트1에 props로 변수 전달하기
    // const name = '황진';
    // const age = 20;

    // 컴포넌트2에 스타일 전달
    const style = {
        color: "red"
    }

    // 컴포넌트3에 이름, 나이, 전화번호, 주소를 전달하고 화면에 출력하기
    // const [name, age, phone, addr] = ['나재민', 20, '010-1234-1234', '서울시'];
    const users = {
        name : '나재민',
        age : 20,
        phone : '010-1234-1234',
        addr : '서울시'
    }

    return (
        <>
            {/* <Component01 name={name} age={age}/> */}
            {/* <Component02 style={style}/> */}
            {/* <Component03 name={name} age={age} phone={phone} addr={addr} /> */}
            <Component03 users={users}></Component03>
        </>
    );
};

export default Container;