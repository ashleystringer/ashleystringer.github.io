//console.log('scrollNav.js');

window.onscroll = () =>{
    func();
}

const navbar = document.getElementsByClassName('navbar')[0];

//console.log(navbar);

let sticky = navbar.offsetTop;

const func = () => {

    console.log(`sticky: ${sticky}`);
    console.log(`window.pageYOffset: ${window.pageYOffset}`);

    console.log(`window.pageYOffset >= sticky: ${(window.pageYOffset >= sticky)}`);
    console.log(`window.pageYOffset == sticky: ${(window.pageYOffset == sticky)}`);

    if(window.pageYOffset > sticky){
       //console.log('add class');
        navbar.classList.add("sticky");
    }else if(window.pageYOffset == 0){
        //console.log('remove class');
        navbar.classList.remove("sticky");
    }
};