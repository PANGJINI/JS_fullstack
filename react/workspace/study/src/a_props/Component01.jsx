import React from 'react';

const Component01 = (props) => {
    // const name = '황진';
    // console.log(props);
    // 콘솔을 확인해보면 object에 담겨서 전달된다.
    // object의 속성에 접근하기 위해 props.name 처럼 사용할 수 있다.
    return (
        <div>
            저의 이름은 {props.name}입니다.
        </div>
    );
};

export default Component01;