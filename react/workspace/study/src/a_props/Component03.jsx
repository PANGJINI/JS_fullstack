import React from 'react';

const Component03 = (props) => {
    // 반복되는 코드를 줄이기 위해서 비구조화 할당을 해준다.
    const {users} = props;
    const {name, age, phone, addr} = users;

    return (
        <div>
            <table>
                <thead>
                    <th>이름</th>
                    <th>나이</th>
                    <th>전화번호</th>
                    <th>주소</th>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>{props.name}</td>
                        <td>{props.age}</td>
                        <td>{props.phone}</td>
                        <td>{props.addr}</td>
                    </tr> */}
                    <tr>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{phone}</td>
                        <td>{addr}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Component03;