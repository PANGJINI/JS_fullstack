import React from 'react';
import {useAsync} from 'react-async';
import User from './User';

// 리액트 안에서 비동기 함수를 사용하게 되는 경우
// 무한로딩하는 것을 방지하기 위해 외부 영역에 따로 선언해준다.
// const getUsers = async () => {  
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json()
//     return users;
// }
// //getUsers().then(console.log);

const UserContainer = () => {
   
    const Users = [
        {
            id: 1,
            name: '황진',
            email: 'user1@gmail.com',
        },
        {
            id: 2,
            name: '나재민',
            email: 'user2@gmail.com',
        },
        {
            id: 3,
            name: '김도영',
            email: 'user3@gmail.com',
        },
        {
            id: 4,
            name: '정재현',
            email: 'user4@gmail.com',
        },
    ]

    // 1. 화면쪽에 컨테이너로만 유저의 이름, 이메일 출력하기
    // 2. User로 분리하기
    // const userList = Users.map((user, i) => {
    //     return <User key={i} user={user}/>
    // });

    // 3. Users로 분리하기
    const userList = <Users users={Users} />;


    return (
        <div>
            {userList}
        </div>
    );
};

export default UserContainer;