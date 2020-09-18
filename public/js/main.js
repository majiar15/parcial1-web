let openMenu = true;
document.querySelector('.menu_bar').addEventListener('click', function() {
    // $('nav').toggle(); 
    console.log(openMenu);

    if (openMenu) {

        document.querySelector('.nav').style.left = '0px'

        openMenu = false;
    } else {
        openMenu = true;
        document.querySelector('.nav').style.left = "100%"

    }

});