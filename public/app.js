

const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-Close-Btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const cartOpenBtn = document.querySelector(".cart-icon"); 
const cartCloseBtn = document.querySelector(".cart-Close-Btn");
const cart = document.querySelector(".cart");

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})
submenuOpenBtn.addEventListener("click", (e) => {
        e.currentTarget.parentElement.classList.toggle("text-orange-300");
        submenu.classList.toggle("submenu--open");
})


function CloseNav () {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay--visible");
}
function CloseCart () {
    cart.classList.remove("left-0");
    cart.classList.add("-left-64");
    overlay.classList.remove("overlay--visible");
}



navOpenBtn.addEventListener("click", () => {
        nav.classList.remove("-right-64");
        nav.classList.add("right-0");
        overlay.classList.add("overlay--visible");
        overlay.addEventListener("click", CloseNav)
})
cartOpenBtn.addEventListener("click", () => {
    cart.classList.remove("-left-64");
    cart.classList.add("left-0");
    overlay.classList.add("overlay--visible");
    overlay.addEventListener("click", CloseCart)
})







navCloseBtn.addEventListener("click", CloseNav)
cartCloseBtn.addEventListener("click", CloseCart)


// overlay.addEventListener("click", () => {
//     nav.classList.rEemove("right-0");
//     nav.classList.add("-right-64");
//     overlay.classList.remove("overlay--visible");
//     // overlay.classList.add("overlay");
// })