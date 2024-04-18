import React, { useState } from 'react';

const Color = () => {
    // 빨간색 버튼을 누르면 글자색 빨갛게
    // 파란색 버튼을 누르면 글자색을 파랗게
    // 핑크색 입력 시 글자색 없앰
    // 💜내 코드
    // const result = useState("키키")
    // const [color, setColor] = useState("black");
    // const colorRed = () => {
    //     setColor('red');
    // }
    // const colorBlue = () => {
    //     setColor('blue');
    // }
    // const removeColor = (e) => {
    //     if (e.target.value === "핑크")
    //         setColor('black')    
    // }

    // 💜강의 코드
    const [result, setResult] = useState("")
    const [color, setColor] = useState("")

    const onResult = (e) => {
        let value = e.target.value;
        if(value === "핑크") {
            setColor("");
        }
        return setResult(value);
    }
    const colorRed = () => { setColor("red") }
    const colorBlue = () => { setColor("blue") }


    return (
        // <div>
        //     <p style={{color}}>{result}</p>
        //     <input type="text" onChange={removeColor}></input>
        //     <button onClick={colorRed}>빨강</button>
        //     <button onClick={colorBlue}>파랑</button>
        // </div>
        <div>
        <p style={{color}}>{result}</p>
        <input type="text" onChange={onResult}></input>
        <button onClick={colorRed}>빨강</button>
        <button onClick={colorBlue}>파랑</button>
    </div>
    );
};

export default Color;