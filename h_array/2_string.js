// 문자열
// 문자가 나열되어 있는 형태이다.

// 💖split("구분점")
// 문자열에서 원하는 문자를 구분점으로 생각한다면,
// 그 구분점을 전달해서 각 값을 나누어 Array 객체로 만든다.

let uri = "post/list/1";
console.log(uri.split("/"));    // [ 'post', 'list', '1' ]

console.log("월화수목금토일".split("")); //['월', '화','수', '목','금', '토','일' ]
console.log("월화수목금토일".split()); //[ '월화수목금토일' ]

const dayOfWeek = "월화수목금토일".split("").map((day) => `${day}요일`);
console.log(dayOfWeek);



// 💖includes(value)
// 전달한 값이 문자열에  포함되었는지 검사할 때 사용한다.
console.log("ABC".includes("A"));   //true
console.log("ABC".includes("z"));   //false

const type = "text/plain base64:123atklasji3549p9fjawof";
let isImage = type.includes("image");
console.log(isImage);



// 💖replace(old, new)  replaceAll(old, new)
// old를 찾은 뒤 new교 교체하고 싶을 때 사용
// replace()는 중복된 old값이 있어도 첫 번째 값만 교체되고,
// replaceAll()은 old값에 전달한 값을 전체에서 찾은 뒤 모두 교체한다.
console.log("ABBBBBBBBC".replace("B", "Z"));
console.log("ABBBBBBBBC".replace(/B/g, "Z"));
console.log("ABBBBBBBBC".replaceAll("B", "Z"));

let birth = "2000-12-04";
const birthData = birth.replaceAll("-", "");
console.log(birthData);



// 💖indexOf(value), lastIndexOf(value)
// 전달한 값의 위치(인덱스)를 리턴한다.
const ii = "ABCDA".indexOf("A");
const i3 = "ABCDA".lastIndexOf("A");
console.log(ii);    //0
console.log(i3);    //4



// 💖substring(begin, end)
// 원하는 인덱스를 전달해서 해당 부분의 문자열을 추출한다.
// end를 생략하면 끝까지 추출한다.
console.log("ABCD".substring(0, 2));
console.log("ABCD".substring(0, 3));

// URL 분석
// /member/my-page/post
const url = "/member/my-page/post";

// 1차
let urlUpdated = url.substring(1);
let end = urlUpdated.indexOf("/");
let appName = urlUpdated.substring(0, end);

console.log(appName);

// 2차
let start = urlUpdated.indexOf("/") + 1;
let serviceName = urlUpdated.substring(start);

console.log(serviceName);