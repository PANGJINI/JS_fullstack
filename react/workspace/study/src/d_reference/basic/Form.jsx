import React from 'react';

const Form = (props) => {
    // props를 받아서 form 태그에
    // input 태그 4개(이름, 나이, 핸드폰번호, 이메일)를 작성하고
    // 화면쪽에서 유효값인지 검사
    //console.log(props)

    const { inputsRef, formRef, onClickInputValue, style } = props;
    
    return (
        <div>
            <form style={props.style} ref={formRef}>
                <input type="text" id="name" placeholder="name" ref={(el) => {inputsRef.current[0] = el}}/>
                <input type="text" id="age" placeholder="age" ref={(el) => {inputsRef.current[1] = el}}/>
                <input type="text" id="phone" placeholder="phone" ref={(el) => {inputsRef.current[2] = el}}/>
                <input type="text" id="email" placeholder="email" ref={(el) => {inputsRef.current[3] = el}}/>
                <button type="button" onClick={onClickInputValue}>입력완료</button>
            </form>
        </div>
    );
};

export default Form;