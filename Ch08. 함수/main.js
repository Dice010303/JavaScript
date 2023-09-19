/*
함수
-하나의 단위로 실행할 수 있도록 명령문을 그룹화한 것이다.
 */

/*
함수 생성
-함수 선언식, 함수 표현식 두 가지가 있다.
 */

/*
함수 선언식
-function 키워드, 함수이름(),함수블록{...}으로 이루어져 있다.

함수 표현식
-함수를 변수에 담아 생성한다.
-호이스팅의 영향을 받지 않는다.
 */
//함수 선언식
function hello(){
    console.log("안녕하세요");
    console.log("반갑습니다");
}
hello();

//함수 표현식
let hello2=function(){
    console.log("안녕하세요");
    console.log("반갑습니다");
};
hello2();

/*
파라미터
-괄호() 안에 파라미터(매개변수)를 선언하여 함수 호출 시 값을 전달할 수 있다.
-ES6에서 파라미터에 기본값을 지정하는 기능이 추가되었다.
 */
function person(name,age=0){
    console.log("내 이름은:"+name);
    console.log("나이는: "+ age);
}
person("최영준",23);

/*
반환
-return 키워드를  사용하여 함수에서 값을 반환할 수 있다.
 */
function  sum(num1,num2){
    let num = num1+num2;
    return num;
}
let result = sum(3,5);
console.log(result);