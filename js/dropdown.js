
// header language
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (!event.target.matches('.langDropbtn')) {
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
document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { document.querySelector('.header-top-item__item-list').classList.remove('show') }
})


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
document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { document.querySelector('.js-header-country-top-item__item-list').classList.remove('show') }
})


// worldwide dropdown
document.querySelector('.item-worldwide__select').onclick = worldwideDropdown;

function worldwideDropdown() {
    let c = document.querySelector('.item-worldwide__select-item-list');
    c.classList.toggle('wwDropdown');
}

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { document.querySelector('.item-worldwide__select-item-list').classList.remove('wwDropdown') }
})



let formArray = document.querySelectorAll('.form-body__item');
console.log(formArray);
let fd = document.querySelectorAll('.js-form-body__act');

function formDropdown() {
    for (let i = 0; i <= formArray.length; i++) {
        formArray[ i ].onclick = fDD;
        function fDD() {
            fd[ i ].classList.toggle('form-body__item-list-active-dropdown')
            for (let j = 0; j <= formArray.length; j++) {
                console.log(j);
                if (i !== j) {
                    if (fd[ j ].classList.contains('form-body__item-list-active-dropdown')) {
                        fd[ j ].classList.remove('form-body__item-list-active-dropdown');
                    }
                }
            }

        }
        document.addEventListener('keyup', (e) => {
            if (e.keyCode == 27) { fd[ i ].classList.remove('form-body__item-list-active-dropdown') }
        })
    }
}
formDropdown();