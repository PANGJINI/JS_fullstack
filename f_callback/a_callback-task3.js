// 성과 이름을 전달받아서 풀네임을 만든 뒤 000님 출력
// 전달 예 : "이", "순신"
// 리턴 예 : "이순신님"

const _name = (last, first, callback) => {
    if(callback) {
        return callback(last + first);
    }
    return last + first;
};


const result2 = _name("황", "진");
console.log(result2);

const result = _name("황", "진", (result) => {return result + "님"});
console.log(result);    //return이 안붙어서 undefined가 나왔음.. 왜 리턴이 피요함??