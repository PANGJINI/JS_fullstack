import React from 'react';

const Jsx04 = () => {
    const name = undefined || '기본값';

    const login = true;
    // const login = false;
    const guest = true;

    // 리턴 컴포넌트 안에서는 사용할 수 있는 문법이 제한된다.
    // 리턴 컴포넌트 안에서 if문을 사용할 수 없기 때문에 삼항연산자를 지원한다.
    return (
        <div>
            {name}
            {/* {if() 문을 사용할 수 없다.} */}

            {/* login, guest가 모두 true일 때만 <div>가 출력된다. */}
            { login && guest && (
                <div>
                    <h2>비회원으로 로그인되었습니다.</h2>
                </div>
            )}

            { login ? (
                <h2>{name}님, 환영합니다.</h2>
            ) : (
                <h2>로그인 실패</h2>
            )}
        </div>
    );
};

export default Jsx04;