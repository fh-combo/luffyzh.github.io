// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
    var searchBtn = document.getElementById('search_btn');
    searchBtn.addEventListener('click', function() {
        document.getElementsByClassName('modal')[0].style.display = 'block';
    });
    Array.from(document.getElementsByClassName('close-modal')).forEach(element => {
        element.addEventListener('click', function() {
            document.getElementsByClassName('modal')[0].style.display = 'none';
        });
    });
})();
