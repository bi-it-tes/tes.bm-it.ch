let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logo');
let navigation = document.querySelector('.navigation');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=> {
            logoSpan.forEach((span, idx) => {
                setTimeout(()=> {
                    span.classList.remove('active');
                    span.classList.add('fade');
            }, (idx + 1) * 50);
        });
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';

            //navigation visible after intro
            navigation.style.display = 'flex';
        }, 2300);
    });
});