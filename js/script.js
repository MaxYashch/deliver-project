// document.querySelector(".header-bottom-search-form__submit").addEventListener("click", function(){
//     document.querySelector(".header-bottom-search-form__field").classList.toggle("active-field");
// })


// nav>.container>.button

// .search>.container>input + button

let searchbar = document.querySelector('.header-search');

function slide (){
    if(searchbar.classList.contains('hide')){
        searchbar.classList.remove('hide');
    }
    else {
        searchbar.classList.add('hide')
    }
}