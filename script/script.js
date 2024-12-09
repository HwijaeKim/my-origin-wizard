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
    if (currentPage.includes('index.html')) {

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
    if (currentPage.includes('2.html')) {
        const color = document.querySelector('input[type="color"]');
        const pivot = document.getElementById('pivot-container');
        let color_txt = document.querySelector('.bg-text');
        let bg = document.getElementById('pivot_contents');

        color.addEventListener('change', () => {
            color_txt.innerHTML = `Current Background Color: ${color.value}`;
            bg.style.backgroundColor = color.value;

            if (color.value === '#000000') {
                pivot.style.filter = 'invert(100%)'
            }
            else {
                pivot.style.filter = 'invert(0)'
            }
        })

    }






    /*====================3.html====================*/
    // no script.






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
    if (currentPage.includes('6.html')) {
        const loadingBox = document.getElementById('loadingBox');
        const mainContents = document.getElementById('mainContents')

        setTimeout(() => {
            loadingBox.style.display = 'none';
            document.body.style.background = 'white';
            mainContents.style.display = 'block'
        }, 100)



        const radio = document.querySelectorAll('input[type="radio"]');
        const loading = document.querySelector('.character');
        const imgChar = document.querySelector('.img_cha');

        radio.forEach(item => {
            item.addEventListener('click', () => {

                if(item.value === 'ps') {
                    document.body.style.background = 'white'
                    loading.style.background = '#31A8FF';
                    imgChar.style.background = `url("../sources/06adobe/${item.value}.png") no-repeat`;
                    imgChar.style.backgroundSize = 'contain';
                }

                else if(item.value === 'ai') {
                    document.body.style.background = 'white'
                    loading.style.background = '#FF9A00';
                    imgChar.style.background = `url("../sources/06adobe/${item.value}.png") no-repeat`;
                    imgChar.style.backgroundSize = 'contain';
                }

                else if(item.value === 'xd') {
                    document.body.style.background = 'white'
                    loading.style.background = '#FF61F6';
                    imgChar.style.background = `url("../sources/06adobe/${item.value}.png") no-repeat`;
                    imgChar.style.backgroundSize = 'contain';
                }

                else if(item.value === 'pr') {
                    document.body.style.background = 'white'
                    loading.style.background = '#9999FF';
                    imgChar.style.background = `url("../sources/06adobe/${item.value}.png") no-repeat`;
                    imgChar.style.backgroundSize = 'contain';
                }

                else if(item.value === 'ae') {
                    document.body.style.background = 'white'
                    loading.style.background = '#9999FF';
                    imgChar.style.background = `url("../sources/06adobe/${item.value}.png") no-repeat`;
                    imgChar.style.backgroundSize = 'contain';
                }

            })
        })
    }





    /*====================7.html====================*/
    // no script.






    /*====================8.html====================*/






    /*====================9.html====================*/
    if (currentPage.includes('9.html')) {

        let modal = document.getElementById('modal');
        let modalBtn = document.querySelector('.close');
        let modalImg = document.querySelector('.modal_img');
        let bg = document.getElementById('dark_bg');
        let imgsClick = document.querySelectorAll('.imgs');


        let modalTitle = document.querySelector('.modal_title');
        let modalSub = document.querySelector('.modal_sub');
        let texts = [
            {
                title: 'VIDEO',
                sub: '2020.08 <br><br>고등학교 3학년, 졸업작품 프로젝트로 진행한 비주얼 모션그래픽스 동영상의 포스터다.<br>'
            },
            {
                title: 'DESIGN',
                sub: '2020.07 <br><br>' +
                    '닌텐도사의 <젤다의 전설: 브레스 오브 더 와일드>의 인게임 집을' +
                    '<br>3Ds MAX와 Cinema 4D + Octane Render를 이용하여 제작하였다.' +
                    '<br><br>3Ds MAX로는 오브젝트 모델링을 진행하였고, 재질과 라이팅을 Cinema 4D와 Octane Render를 이용하여 제작했다.'
            },
            {
                title: 'CODE',
                sub: '2023.12 <br><br>' +
                    '대학교 [콘텐츠디자인] 중간과 기말 프로젝트로 UI/UX 관련 가상의 페이지를 제작하였다.' +
                    '<br>큰 키워드 아랍 에미리트라는 국가를 지정하였고 사막의 반도체를 생각하며 콘텐츠를 기획했다.'

            },
        ];



        imgsClick.forEach((img, index) => {
            img.addEventListener('click', (event) => {
                let src;
                if (img.querySelector('img')) {
                    src = img.querySelector('img').src;
                } else if (img.querySelector('video')) {
                    src = img.querySelector('video').src;
                }

                    modalImg.style.backgroundImage = 'url('+ src +')';
                    modalTitle.innerHTML = texts[index].title;
                    modalSub.innerHTML = texts[index].sub;

                    modal.classList.add('active');
                    bg.classList.add('active');

            })
        })

        modalBtn.addEventListener('click', () => {
            modalImg.innerHTML = '';
            modal.classList.remove('active');
            bg.classList.remove('active');
        })

    }





});









