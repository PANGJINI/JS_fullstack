import React, { useState } from 'react';

const Count = () => {
    
    const [number, setNumber ] = useState(0);
    // number는 변수, setNumber는 number의 상태를 바꿀 수 있는 setter 메서드
    // userState('초기값')

    const increase = () => {
        // number += 1;
        // 버튼 클릭 시 런타임 에러!

        setNumber(number + 1);
    }
    const decrease = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <button onClick={decrease}>감소</button>
            {number}
            <button onClick={increase}>증가</button>
        </div>
    );
};

export default Count;