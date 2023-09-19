/*
 반복문
    -동일한 코드를 반복하여 실행시키는 명령문이다.
    -for문, while문, do while문
 */

/*
 for문
    -정해진 숫자만큼 반복할 때 사용한다.
    -for문의 괄호안은 초기화, 조건식, 표현식으로 구성되어있다.

 실행순서
    1.let i = 0으로 초기화 
    2.i < 5 조건식이 만족을 하면
    3.for문 안에 명령문을 수행 
    4.i++ i값을 증가
    5.다시 조건식을 만족하는지 확인하고 만족하면 계속 수행 
    6.조건식이 거짓이면 for문 종료 
*/
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let fruit=['사과','바나나','딸기','포도','오렌지'];
for(let i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}


/*
continue, break
-continue : continue 아래에 있는 문장들을 건너 뛰고 다음 반복 실행
-break : 현재 진행하고 있는 제어문의 흐름을 종료한다.
 */
let text="";
for(let i=0;i<10;i++){
    if(i==3){
        //continue;
        break;
    }
    text=text+i;
}
console.log(text);

//별찍기
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++) {
        document.write("*");
    }
    document.write("<br>");
}
//거꾸로 별찍기
for(let i=0;i<5;i++){
    for(let j=5;j>i;j--){
        document.write("*");
    }
    document.write("<br>");
}