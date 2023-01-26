let btn = document.querySelectorAll('.button');
let modal = document.querySelectorAll('.modal');
let close = document.querySelectorAll('.close');


btn[0].addEventListener('click', () => {
    modal[0].classList.add('show');
} )

close[0].addEventListener('click', () => {
    modal[0].classList.remove('show');
} )