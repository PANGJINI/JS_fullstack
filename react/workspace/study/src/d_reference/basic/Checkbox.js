import React, { useState } from 'react';

const Checkbox = () => {

    const [message, setMessage] = useState([]);

    const onClickToCheck = (e) => {
        if(e.target.checked) {
            let value = e.target.value;
            // 💛권장
            setMessage(message.concat(value));
            // setMessage([...message, value]);     //spread 문법으로 작성
        } else {
            setMessage(message.filter((message) => message !== e.target.value))
        }
        
    }

    return (
        <div>
            <div>
                <span>front-end</span> <input type="checkbox" value="front-end" onClick={onClickToCheck}/>
            </div>
            <div>
                <span>back-end</span> <input type="checkbox" value="back-end" onClick={onClickToCheck}/>
            </div>
            <div>
                <span>ai</span> <input type="checkbox" value="ai" onClick={onClickToCheck}/>
            </div>

            <div>
                <h3>{message.map((message, i) => <p key={i}>{message}</p>)}</h3>
            </div>
            
        </div>
        
    );
};

export default Checkbox;