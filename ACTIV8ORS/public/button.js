const section_createDrop = document.querySelector('#create');
const section_homeDrop = document.querySelector('#home');
const section_homeDrop_desc = document.querySelector('#description');
const section_sideNav = document.querySelector('#sideNav');
const section_mainContent = document.querySelector('#main-content');

const header_navBar = document.querySelector('#top');

const btn_dropDown = document.querySelector('#btn');
const btn_goUp = document.querySelector('#btn_two');

const btn_closeSideNav = document.querySelector('#close-side-nav');
const btn_openSideNav = document.querySelector('#open-side-nav');

const navBar_home = document.querySelector('#homeNav');
const navBar_services = document.querySelector('#servicesNav');
const navBar_nft = document.querySelector('#nftNav');
const navBar_roadmap = document.querySelector('#roadmapNav');

const sideNav_home = document.querySelector('#side_home');
const sideNav_services = document.querySelector('#side_services');
const sideNav_nft = document.querySelector('#side_nft');
const sideNav_roadmap = document.querySelector('#side_roadmap');

btn_dropDown.onclick = function() {
    myFunction()
};

btn_goUp.onclick = function() {
    myFunction_two()
};

btn_closeSideNav.onclick = function() {
    closeSideNav()
};

btn_openSideNav.onclick = function() {
    openSideNav()
};

navBar_services.onclick = function() {
    resetContents()
};

sideNav_home.onclick = function() {
    closeSideNavClicked()
};

sideNav_services.onclick = function() {
    closeSideNavClicked()
};


sideNav_nft.onclick = function() {
    closeSideNavClicked()
};


sideNav_roadmap.onclick = function() {
    closeSideNavClicked()
};



function myFunction() {
    btn_dropDown.classList.add("hidden");
    btn_goUp.classList.remove("hidden");

    section_createDrop.classList.remove("hidden");

    header_navBar.style.top = "-70%";
    header_navBar.style.transition = "all .3s";
}

function myFunction_two() {
    header_navBar.style.top = "0%";
    header_navBar.style.transition = "all .3s";

    btn_dropDown.classList.remove("hidden");
    setTimeout(timer, 500);
}

function timer() {
    btn_goUp.classList.add("hidden");
    section_createDrop.classList.add("hidden");
}

function closeSideNav() {
    section_sideNav.style.transition = "all .3s";
    section_sideNav.style.right = "-75%";

    section_mainContent.classList.remove("blurred");
    section_mainContent.classList.remove("blurred");
    btn_openSideNav.classList.remove("hidden");

    btn_closeSideNav.style.transition = "all 1s";
    btn_closeSideNav.style.transform = "rotate(0deg)";
}

function openSideNav() {
    section_sideNav.style.transition = "all .3s";
    section_sideNav.style.right = "0%";

    section_mainContent.classList.add("blurred");
    section_mainContent.classList.add("blurred");

    btn_openSideNav.classList.add("hidden");

    btn_closeSideNav.style.transition = "all 1s";
    btn_closeSideNav.style.transform = "rotate(180deg)";

}

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header_navBar.style.top = "0%";
    header_navBar.style.transition = "all .3s";
  } else {
    header_navBar.style.top = "-70%";
    header_navBar.style.transition = "all .3s";
  }
  prevScrollpos = currentScrollPos;
}


function resetContents() {
    section_createDrop.classList.add("hidden");
    btn_dropDown.classList.remove("hidden");
}

function closeSideNavClicked() {
    closeSideNav();
}