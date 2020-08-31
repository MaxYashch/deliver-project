
// header language
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it

window.addEventListener("click", function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[ i ];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});



function Country() {
    document.getElementById("myDropdownCountry").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it

window.addEventListener("click", function (event) {
    if (!event.target.matches('.Countrybtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-country");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[ i ];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});


// worldwide dropdown
document.querySelector('.item-worldwide__select').onclick = worldwideDropdown;

function worldwideDropdown() {
    let c = document.querySelector('.item-worldwide__select-item-list');
    c.classList.toggle('wwDropdown');
}

// window.addEventListener("click", function (event) {
//     if (!event.target.matches('.tem-worldwide__button')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var t;
//         for (t = 0; t < dropdowns.length; t++) {
//             var openDropdown = dropdowns[ t ];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// });

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { document.querySelector('.item-worldwide__select-item-list').classList.remove('wwDropdown') }
})


// form-body dropdown

let expressDropList = document.querySelector('.form-body__item-list-active');
let expressDropButton = document.querySelector('.form-body__item-button');
expressDropButton.addEventListener('click', () => {
    if (expressDropList.classList.contains('form-body__item-list-active-dropdown')) {
        expressDropList.classList.remove('form-body__item-list-active-dropdown');
    }
    else {
        expressDropList.classList.add('form-body__item-list-active-dropdown')
    }
})

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { expressDropList.classList.remove('form-body__item-list-active-dropdown') }
})
// form-body dropdown 2
let expressDropList2 = document.querySelector('.form-body__item-list-active-two');
let expressDropButton2 = document.querySelector('.form-body__item-button-two');
expressDropButton2.addEventListener('click', () => {
    if (expressDropList2.classList.contains('form-body__item-list-active-dropdown')) {
        expressDropList2.classList.remove('form-body__item-list-active-dropdown');
    }
    else {
        expressDropList2.classList.add('form-body__item-list-active-dropdown')
    }
})

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { expressDropList2.classList.remove('form-body__item-list-active-dropdown') }
})

// form-body dropdown3
let expressDropList3 = document.querySelector('.form-body__item-list-active-three');
let expressDropButton3 = document.querySelector('.form-body__item-button-three');
expressDropButton3.addEventListener('click', () => {
    if (expressDropList3.classList.contains('form-body__item-list-active-dropdown')) {
        expressDropList3.classList.remove('form-body__item-list-active-dropdown');
    }
    else {
        expressDropList3.classList.add('form-body__item-list-active-dropdown')
    }
})

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { expressDropList3.classList.remove('form-body__item-list-active-dropdown') }
})

// form-body dropdown4
let expressDropList4 = document.querySelector('.form-body__item-list-active-four');
let expressDropButton4 = document.querySelector('.form-body__item-button-four');
expressDropButton4.addEventListener('click', () => {
    if (expressDropList4.classList.contains('form-body__item-list-active-dropdown')) {
        expressDropList4.classList.remove('form-body__item-list-active-dropdown');
    }
    else {
        expressDropList4.classList.add('form-body__item-list-active-dropdown')
    }
})

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { expressDropList4.classList.remove('form-body__item-list-active-dropdown') }
})
