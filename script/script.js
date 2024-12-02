// index.html에 선언된 스크립트

$(() => {
    $('#win_container').draggable();
})



const icons = document.querySelectorAll('.iconFlex');
const popupBox = document.getElementById('popup');

icons.forEach((icon,index) => {
    icon.addEventListener('click', () => {
        popupBox.classList.add('active');

        setTimeout(() => {
            window.location.href = `./${index + 1}.html`;
        }, 1000);
    })
})


const container = document.getElementById('win_container');
const maxBtn = document.querySelector('.max');

maxBtn.addEventListener('click', () => {
    container.classList.toggle('max');
})