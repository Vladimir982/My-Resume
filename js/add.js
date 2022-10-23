// This script for change languages
const select = document.querySelector('select');
const allLang = ['en', 'ua'];

select.addEventListener("change", changeURLLanguage);

// перенаправление на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#ua";
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash]; 
    for (let key in langArr) {
        let element = document.querySelector('.lng-' + key);
        if (element) {
            element.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();

// The end script




// let link = document.querySelectorAll('.class-arrow');


// // for (let i = 0; i < link.length; i++) {
// //     const img = document.querySelectorAll('.experience__img');
// //     const e = link[i];
// //     for (let k = 0; k < img.length; k++) {
// //         const el = img[k];
// //         e.addEventListener('click', function () {
// //             el.classList.toggle('active');
// //             const text = document.querySelector('.experience__text');
// //             text.classList.toggle('active');
// //         });
// //     }
// // }
// $(document).ready(function () {
//     $('.class-arrow').click(function(event) {
//         $('.class-arrow, .experience__img').toggleClass('active');
//         // $('body').toggleClass('lock');
//     })
// })

// if (link.length >= 1) {
//     const img = document.querySelectorAll('.experience__img');
//     link.addEventListener('click', function () {
//         img.classList.toggle('active');
//         const text = document.querySelector('.experience__text');
//         text.classList.toggle('active');
//     });
// }

// switch (link) {
//     case "1":
//         alert("Понедельник");
//     case "2":
//         alert("Вторник");
//     case "3":
//         alert("Среда");
//     default:
//         alert("Введено неправильное значение");

// }