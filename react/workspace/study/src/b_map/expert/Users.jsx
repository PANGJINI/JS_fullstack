import React from 'react';

const Users = ({users}) => {
    // console.log(props);
    return (
        <>
            {users.map((user) => <User user={user}/>)}
        </>
    );
};

export default Users;