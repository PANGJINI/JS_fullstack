import React, { useRef, useState } from 'react';


//한글 음식, 영어 음식명을 입력하면
// 아래 결과에서 한글 음식명 (영어음식명)으로 표현하는 리스트 구현
// 리스트에서 체크박스로 삭제 버튼을 누르면
// 해당 리스트가 삭제
const FoodContainer = () => {

    const inputsRef = useRef([]);
    const [foodText, setFoodText] = useState([]);
    const [checked, setChecked] = useState([]);

    // 추가 버튼
    const onClickAddFood = () => {
        const korName = inputsRef.current[0].value;
        const engName = inputsRef.current[1].value;
        const value = `${korName} (${engName})`;

        // 한글문자열과 영어문자열을 합쳐서 foodText의 상태에 누적시킨다.
        setFoodText(foodText.concat(value));
    }

    // 삭제 버튼
    const onClickDeleteFood = () => {
        // filter를 통해 체크가 해제된 foodText만 추출한다.
        const newFoodText = foodText.filter((food, i) => !checked[i]);
        // 추출된 newFoodText로 foodText의 상태를 업데이트해준다.
        setFoodText(newFoodText);
        // 삭제가 된 경우 모든 체크박스의 상태를 false로 초기화해준다.
        setChecked([]); 
    }

    // 체크박스의 상태가 변경될 때 호출된다.
    const handleCheckboxChange = (i) => {
        // 현재 checked 배열의 복사본을 생성한다.
        const newChecked = [...checked];

        // 체크박스의 상태를 반전시킨다.
        // 현재 체크박스의 상태가 true라면 false로, false라면 true로 변경한다.
        newChecked[i] = !newChecked[i];

        // 마지막으로 변경된 상태인 newChecked의 상태로 체크박스의 상태를 업데이트한다.
        setChecked(newChecked);
    }

    // 화면에 출력할 foodList
    const foodList = foodText.map((food, i) => (
        // 각 체크박스에 고유한 id를 부여하기 위해 키값으로 인덱스를 사용한다.
        <div key={i}> 
            <input 
                type="checkbox" 
                id={`checkbox_${i}`} 
                // 체크박스의 상태를 checked 배열의 값으로 설정한다.
                // checked 배열의 해당 인덱스가 true이면 체크된다.
                checked={checked[i]} 
                // 체크박스의 상태가 변경될 때 handleCheckboxChange 함수를 호출한다.
                // 인덱스를 인수로 전달하여 어떤 체크박스가 변경되었는지 알려준다.
                onChange={() => handleCheckboxChange(i)} 
            />
            <label>{food}</label>
        </div>
    ))


    return (
        <div>
            <input type="text" id="kor" placeholder="한글음식명" ref={(el) => {inputsRef.current[0] = el}}/>
            <input type="text" id="eng" placeholder="영어음식명" ref={(el) => {inputsRef.current[1] = el}}/>
            <button type="button" id="addButton" onClick={onClickAddFood}>추가</button>
            <button type="button" id="addButton" onClick={onClickDeleteFood}>삭제</button>
            
            <div>
                {foodList}
            </div>
            
        </div>
    );
};


export default FoodContainer;