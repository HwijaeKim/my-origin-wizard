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