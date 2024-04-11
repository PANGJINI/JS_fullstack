import React from 'react';

const User = ({user}) => {
    const {name, email}= user;

    return (
        <div>
            {name}, {email}
        </div>
    );
};

export default User;