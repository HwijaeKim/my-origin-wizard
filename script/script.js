document.addEventListener('DOMContentLoaded', () => {
    /**
     * 현재 열람 중인 html 파일명 불러오기
     *
     * 여러 html을 하나의 스크립트로 관리하기 때문에 현재 열람 중인 html페이지에 대한 스크립트만
     * 실행하도록 해야 한다.
     *
     * 현재 페이지와 관련 없는 상단의 스크립트가 실행될 때 오류가 발생해
     * 정상적으로 작동하지 않는 문제를 발견하여
     *
     * 각 html 관련 스크립트가 실행되기 전
     * if(currentPage.includes('[name].html)) {}
     * 위와 같은 if문을 통해 참인 영역만 실행하도록 코드를 구성
     */
    const currentPage = window.location.pathname;
    console.log(currentPage);


    /*====================index.html====================*/
    if (currentPage.includes('index.html') || currentPage.includes('/')) {

        $(() => {
            $('#win_container').draggable();
        })


//index.html에서 각 아이콘 클릭시 화면전환 기능 구현
        const icons = document.querySelectorAll('.iconFlex');  //총 9개의 iconFlex 클래스를 querySelectorAll 배열로 변수 지정
        const popupBox = document.getElementById('popup');  //아이콘 클릭시 자연스럽게 전환될 수 있도록 popup id 변수 지정

        icons.forEach((icon,index) => {  //iconFlex div를 forEach, 클릭된 icon의 순서를 알기 위해 index를 추가로 선언
            icon.addEventListener('click', () => {  //icon을 클릭하면
                popupBox.classList.add('active');  //미리 선언해둔 팝업 변수에 active클래스를 추가하여 keyframe애니메이션 재생

                //핵심 코드. popupBox에 active 클래스가 추가되고 1초 후 내부 코드 실행
                setTimeout(() => {
                    /*
                    * index페이지 전환 코드
                    * 각 서브 페이지 이름은 1~9.html로 지정해 두었음
                    * forEach에서 선언한 index값은 클릭한 icon의 순서
                    * querySelectorAll로 불러온 배열은 0부터 시작하므로 클릭한 index에 1을 더함
                    * 최종적으로 백틱을 사용하여 클릭한 icon에 대한 순서(index)값+1.html 파일을 1초 후 열도록 프로그래밍
                    * ex. 6번째 아이콘을 클릭 -> index값은 5 -> 5+1 => 6.html 1초 후 전환
                    * */
                    window.location.href = `./${index + 1}.html`;
                }, 1000);
            })
        })


        const container = document.getElementById('win_container');
        const maxBtn = document.querySelector('.max');

        maxBtn.addEventListener('click', () => {
            container.classList.toggle('max');
        })

    }







    /*====================1.html====================*/






    /*====================2.html====================*/






    /*====================3.html====================*/






    /*====================4.html====================*/






    /*====================5.html====================*/
    if (currentPage.includes('5.html')) {
        // svg중 bezier 부분 path, 움직일 원, 버튼 4개를 변수로 선언
        const bezierControl = document.getElementById('bezier-control');
        const ballObj = document.getElementById('ball');
        const bezierBtn = document.querySelectorAll('.graph-btn');


        // Node List로 나열된 bezierBtn을 forEach로 풀어주기
        bezierBtn.forEach((btn, index) => {
            btn.addEventListener('click', () => {

                // 버튼 순서대로 클릭시 index값을 통해 if문으로 조작
                if(index === 0) {
                    /*
                    * setAttribute 기능은 Google 검색을 통해 숙지하였음.
                    * 해당 변수 내 요소의 속성값을 변경할 수 있는 메서드.
                    * (변수).setAttribute(속성명, 속성값);
                    * */
                    bezierControl.setAttribute(
                        // 해당 변수 path 내 포함된 요소 "b"에 대한 속성값을 아래와 같이 변경한다.
                        "d",
                        "M10.5 327C73 251.167 243.3 99.5 424.5 99.5C605.7 99.5 776.667 250.833 839.5 326.5"
                    );

                    // 추가된 모든 클래스를 제거
                    ballObj.className = '';
                }


                else if(index === 1) {
                    bezierControl.setAttribute(
                        "d",
                        "M10.5 327C43.5 327 132 99.5 214.5 99.5C335 99.5 332.5 326.5 839.5 326.5"
                    );

                    //추가된 모든 클래스를 제거하고 graph2 클래스를 add
                    ballObj.className = '';
                    ballObj.classList.add('graph2');
                }


                else if(index === 2) {
                    bezierControl.setAttribute(
                        "d",
                        "M10.5 327C419 327 364 99.5 454.5 99.5C545 99.5 484.5 326.5 839.5 326.5"
                    );

                    ballObj.className = '';
                    ballObj.classList.add('graph3');
                }


                else if(index === 3) {
                    bezierControl.setAttribute(
                        "d",
                        "M10.5 327C654.5 337.5 685.5 99.5 741.5 99.5C797.5 99.5 790 326.5 839.5 326.5"
                    );

                    ballObj.className = '';
                    ballObj.classList.add('graph4');
                }
            })
        })

    }









    /*====================6.html====================*/






    /*====================7.html====================*/






    /*====================8.html====================*/






    /*====================9.html====================*/

});









