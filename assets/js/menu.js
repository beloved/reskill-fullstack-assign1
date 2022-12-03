
const navItem = document.querySelector(".nav-item");
const navItems = document.querySelectorAll(".nav-item");
const menuOpen= document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");


function openMenu() {
    menuOpen.style.display = "none";
    menuClose.style.display = "inline";
    navItems.forEach( 
        function(item) { 
            item.style.display = "inline";
            item.addEventListener("click", closeMenu);
        }
    )

    // navItem.className.add(".show-nav-item");
    // navItem.className.remove(".nav-item");
    // if (navItem.style.display == "none") {
    //     navItem.style.display = "inline";
    // }
}

function closeMenu() {
    menuOpen.style.display = "inline";
    menuClose.style.display = "none";
    navItems.forEach( 
        function(item) { 
            item.style.display = "none";
        }
    )
}

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);


  