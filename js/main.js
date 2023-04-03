const btnClick = document.getElementById("switch-");
const darkIcons = document.querySelectorAll(".mideas i");
const darkIcons1 = document.querySelectorAll(".btn_central");
const darkIcons2 = document.body;
const darkIcons3 = document.querySelectorAll(".navegation a");
const darkIcons4 = document.querySelectorAll(".text_page");
const darkIcons5 = document.querySelector(".logo");

btnClick.addEventListener("click",function(){
    this.classList.toggle("dark");

    darkIcons.forEach(icon => {
        icon.classList.toggle("dark")
    })

    darkIcons1.forEach(icon => {
        icon.classList.toggle("dark");
    });

    darkIcons2.classList.toggle("dark");

    darkIcons3.forEach(icon => {
        icon.classList.toggle("dark");
    });

    darkIcons4.forEach(icon => {
        icon.classList.toggle("dark");
    });

    darkIcons5.classList.toggle("dark");

});