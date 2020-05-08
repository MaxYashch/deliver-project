let searchbar = document.querySelector('.header-search');
let searchbutton = document.querySelector('.header-bottom-search-form__submit');
searchbutton.addEventListener('click', () => {
    if(searchbar.classList.contains('header-search_open')){
        searchbar.classList.remove('header-search_open');
    }
    else {
        searchbar.classList.add('header-search_open')
    }
})

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27)
    {searchbar.classList.remove('header-search_open')}
})