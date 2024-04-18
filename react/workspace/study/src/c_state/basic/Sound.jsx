import React, { useState } from 'react';

const Sound = () => {
    // 강아지 버튼 누르면 강아지 울음소리
    // 고양이 버튼 누르면 고양이 울음소리

    const [sound, setSound] = useState("");
    const dogButton = () => {
        setSound("멍멍")
    }
    const catButton = () => {
        setSound("먕😻")
    }

    return (
        <div>
            <p>{sound}</p>        
            <button onClick={dogButton}>강아지 버튼</button>
            <button onClick={catButton}>고양이 버튼</button>
        </div>
    );
};

export default Sound;