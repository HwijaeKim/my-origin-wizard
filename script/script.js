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
    if (currentPage.includes('1.html')) {

        const upBtn = document.querySelector('.up-btn');
        const floorTxt = document.querySelector('.floor');
        const LDoor = document.querySelector('.L-door');
        const RDoor = document.querySelector('.R-door');

        upBtn.addEventListener('click', () => {
            upBtn.classList.add('active');

            // 초기 숫자 1 변수 선언 (지속해서 변하기 때문에 let으로)
            let num = 1;

            // setInterval로 1초에 한 번씩 실행되도록
            let countNum = setInterval(() => {
                if(num <= 9) {
                    floorTxt.innerHTML = `${num}.html`
                    num++;
                }
                // num이 9 이상이 되면 엘리베이터 문이 열리도록 구현
                else if(num > 9) {
                    floorTxt.innerHTML = `Hello, World!`
                    upBtn.classList.remove('active');
                    LDoor.classList.add('active');
                    RDoor.classList.add('active');}

            }, 1000);
        })

    }







    /*====================2.html====================*/
    if (currentPage.includes('2.html')) {
        const color = document.querySelector('input[type="color"]');
        const pivot = document.getElementById('pivot-container');
        let color_txt = document.querySelector('.bg-text');
        let bg = document.getElementById('pivot_contents');

        // 컬러값이 바뀌면 실행
        color.addEventListener('change', () => {
            // 백틱을 이용한 innerHTML 출력
            color_txt.innerHTML = `Current Background Color: ${color.value}`;
            bg.style.backgroundColor = color.value;

            // 배경 color가 완전한 검은색이 되면 pivot 색상반전
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
    if (currentPage.includes('4.html')) {

        const modal = document.getElementById('modal');
        const modalBtn = document.querySelector('.close');
        const modalImg = document.querySelector('.modal_img');
        const bg = document.getElementById('dark_bg');
        const imgsClick = document.querySelectorAll('.imgs');

        const logoBox = document.querySelector('.logo-box');


        const modalTitle = document.querySelector('.modal_title');
        const modalSub = document.querySelector('.modal_sub');

        // 배열선언
        let texts = [
            {
                title: '마인크래프트',
                sub: '마인크래프트는 저에게 매우 뜻깊은 게임입니다.<br><br>' +
                    '명령어를 치기 위해 처음으로 영어를 배웠고 영상을 만들기 위해 3D 툴과 영상 편집 프로그램을 직접 다루기 시작했습니다.<br><br>' +
                    '저와 가장 오래 한 게임이자 지금까지도 하고 있는 몇 안되는 게임입니다.'
            },
            {
                title: '롤러코스터 타이쿤3',
                sub: '정상인 사람도 이 게임만 하면 싸이코가 된다는 전설의 게임 <롤러코스터 타이쿤>입니다. <br><br>' +
                    '놀이공원의 주인이 되어 자유롭게 또는 미션을 가지고 운영하는 게임으로 자유도가 꽤나 높다는 것이 특징입니다. <br><br>' +
                    '그래서 그런가, 의도적으로 손님을 유배지로 보내거나 놀이기구를 고장내기도 합니다...'
            },
            {
                title: '젤다의 전설',
                sub: '<젤다의 전설> 시리즈는 2020년도 닌텐도 스위치를 구입한 이후부터 지속적으로 플레이 하고 있는 게임 이입다. <br><br>' +
                    '광활한 오픈월드에서 자유롭게 플레이하는 맛이 있습니다. <br><br>' +
                    '비교적 신잡만 플레이한 유저여서인지 이전 타이틀을 못 해본 것이 아쉽게 다가옵니다... <br><br>'

            },
        ];


        // 총 3개의 imgsClick forEach
        imgsClick.forEach((img, index) => {
            img.addEventListener('click', (event) => {
                let src;
                if (img.querySelector('img')) {
                    src = img.querySelector('img').src;
                } else if (img.querySelector('video')) {
                    src = img.querySelector('video').src;
                }

                // 클릭한 img에 대한 src 정보를 자동으로 받아와 모달에 할당
                modalImg.style.backgroundImage = 'url('+ src +')';

                // 배열로 선언한 텍스트 역시 자동으로 모달에 할당
                modalTitle.innerHTML = texts[index].title;
                modalSub.innerHTML = texts[index].sub;

                modal.classList.add('active');
                bg.classList.add('active');

                // img의 index값에 따른 로고 변경
                if (index === 0 ) {
                    logoBox.style.background = "url('./sources/04game/minecraft.png') center no-repeat"
                }
                else if (index === 1) {
                    logoBox.style.background = "url('./sources/04game/roller.png') center no-repeat"
                }
                else if (index === 2) {
                    logoBox.style.background = "url('./sources/04game/zelda.png') center no-repeat"
                }
            })
        })

        //close버튼
        modalBtn.addEventListener('click', () => {
            modalImg.innerHTML = '';
            modal.classList.remove('active');
            bg.classList.remove('active');
        })

    }








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

        // 로딩창 구현 2.5초 뒤 자동으로 넘어감
        setTimeout(() => {
            loadingBox.style.display = 'none';
            document.body.style.background = 'white';
            mainContents.style.display = 'block'
        }, 2500)



        const radio = document.querySelectorAll('input[name="mode"]');
        const loading = document.querySelector('.character');
        const imgChar = document.querySelector('.img_cha');

        radio.forEach(item => {
            item.addEventListener('click', () => {

                /*
                * 클릭한 radio의 value 값에 따른 설정 변경
                * 더 간략하게 할 수 있는 방법이 존재할 것 같아 아쉬운 부분
                * */
                if(item.value === 'ps') {
                    document.body.style.background = 'white'
                    loading.style.background = '#31A8FF';
                    imgChar.style.background = `url("./sources/06adobe/${item.value}.png") no-repeat`;
                    imgChar.style.backgroundSize = 'contain';
                }

                else if(item.value === 'ai') {
                    document.body.style.background = 'white'
                    loading.style.background = '#FF9A00';
                    imgChar.style.background = `url("./sources/06adobe/${item.value}.png") no-repeat`;
                    imgChar.style.backgroundSize = 'contain';
                }

                else if(item.value === 'xd') {
                    document.body.style.background = 'white'
                    loading.style.background = '#FF61F6';
                    imgChar.style.background = `url("./sources/06adobe/${item.value}.png") no-repeat`;
                    imgChar.style.backgroundSize = 'contain';
                }

                else if(item.value === 'pr') {
                    document.body.style.background = 'white'
                    loading.style.background = '#9999FF';
                    imgChar.style.background = `url("./sources/06adobe/${item.value}.png") no-repeat`;
                    imgChar.style.backgroundSize = 'contain';
                }

                else if(item.value === 'ae') {
                    document.body.style.background = 'white'
                    loading.style.background = '#9999FF';
                    imgChar.style.background = `url("./sources/06adobe/${item.value}.png") no-repeat`;
                    imgChar.style.backgroundSize = 'contain';
                }

            })
        })
    }





    /*====================7.html====================*/
    // no script.






    /*====================8.html====================*/
    if (currentPage.includes('8.html')) {

        // JQuery UI 라이브러리 선언 없이 Vanilla JS로 구현한 드래그
        const draggable = document.getElementById('drag');
        let offsetX = 0, offsetY = 0;
        let isDragging = false;

        const stroke1 = document.querySelector('.line1');
        const stroke2 = document.querySelector('.line2');
        const stroke3 = document.querySelector('.line3');
        const fill = document.getElementById('sunrin-fill');
        const music = document.getElementById('sunrin-sound');


        draggable.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - draggable.offsetLeft;
            offsetY = e.clientY - draggable.offsetTop;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                draggable.style.left = e.clientX - offsetX + 'px';
                draggable.style.top = e.clientY - offsetY + 'px';

                const left = e.clientX - offsetX;
                const top = e.clientY - offsetY;
                console.log(top, left); //Dev Only

                // 특정 좌표값 범위 내 들어오게 된다면 svg애니메이션, 음악 재생
                if (top >= 650 && top <= 700 && left >= 840 && left <= 940) {
                    stroke1.classList.add('active');
                    stroke2.classList.add('active');
                    stroke3.classList.add('active');
                    fill.classList.add('active');
                    music.play();
                }
            }


        });

        // 마우스 클릭을 해제하면 드래그도 비활성화
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });


        // Dev Only
        // path = document.querySelector('.line3').getTotalLength();
        // console.log(path);

    }









    /*====================9.html====================*/
    if (currentPage.includes('9.html')) {
        const selectCode = document.querySelectorAll('input[name="code-select"]');
        const rotateContainer = document.querySelector('.code-3d');
        const subtitleCode = document.querySelector('.code-subtitle');
        let codeTxts = [
            {
                sub: '웹 표준을 준수, 다양한 태그를 사용하고 CSS, JS와 연동'
            },
            {
                sub: '다양한 스타일을 적용하고 레이아웃 배치, 애니메이션, 가상 클래스'
            },
            {
                sub: '기본 문법에 대한 이해, DOM조작, 동적 웹 페이지 구현'
            },
            {
                sub: '여러 문법을 이용하여 텍스트를 작성할 수 있으며 이미지, 테이블, 코드 등을 작성<br>Markdownr기반의 메모 플랫폼 Obsidian에서 활용'
            },
            {
                sub: '리포지토리를 생성하고 사이트 배포'
            },
            {
                sub: 'Github 리포지토리를 로컬 저장공간에 clone<br>' +
                    '연결된 리포지토리에서 변경사항에 대하여 commit 및 push<br>' +
                    '여러 기기에서 리포지토리를 관리하기 위한 git pull origin'
            },
        ];

        //forEach와 배열로 코드 대폭감소
        selectCode.forEach((i, index) => {
            i.addEventListener('click', () => {
                rotateContainer.className = 'code-3d';
                rotateContainer.classList.add(`case${index}`);
                subtitleCode.innerHTML = codeTxts[index].sub;
            })
        })

    }





});









