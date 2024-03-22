// 회원 => 번호, 이름
let user = {
    no: 1,
    name: "육개장먹고싶다",
};

// 프로필 사진 => 번호, img저장경로(/upload/2024-02-13-a.png), 회원
let profileImg = {
    no: 22,
    imgPath: "2024-02-13-a.png",
    user: user,
};

const fullPath = `upload/${profileImg.imgPath}`;
console.log(fullPath);