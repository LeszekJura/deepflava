//ANIMATED BURGER

const burgerButton = document.querySelector('.burger_button');
const mobileMenu = document.querySelector('.nav');
let burgerOpen = false;
burgerButton.addEventListener('click', function () {
    if (!burgerOpen) {
        burgerButton.classList.add('open');
        burgerOpen = true;
        mobileMenu.style.transform = "translateX(0%)";
    } else {
        burgerButton.classList.remove('open');
        burgerOpen = false;
        mobileMenu.style.transform = "translateX(100%)";
    }
});

//NAV BACKGROUND APPEARING ON SCROLL

const header = document.querySelector('.header');

window.onscroll = () => {
    if (window.pageYOffset > 20) {
        header.classList.add('header_scrolled');
    } else {
        header.classList.remove('header_scrolled');
    }
};

//VARIABLES FOR LANGUAGE CHANGE


const langChangeEN = document.querySelector('.flagEN');
const langChangePL = document.querySelector('.flagPL');

const navItems = document.querySelectorAll('.header .nav a');

const menuPicsTextTarget = document.querySelectorAll('.menupics a div p');

const headings = document.querySelectorAll('.main_heading');

//PARALLAX PAGEHERO

const parallaxPageHero = document.querySelector('.main-image-container');
window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallaxPageHero.style.backgroundPositionY = offset * 0.75 + 'px';
});

//EN & PL LANGUAGE VERSION FOR THE NAV ITEMS

const headingsContent = [{
    pl: 'nasze media społecznościowe',
    en: 'our social media'
}]


const navNames = [{
        pl: 'info',
        en: 'news'
    },
    {
        pl: 'wideo',
        en: 'video'
    },
    {
        pl: 'utwory',
        en: 'tracks'
    },
    {
        pl: 'sety',
        en: 'sets'
    }
];


//EN & PL VERSION FOR THE MENU PICS ITEMS

const menuPicsItems = [{
        pl: 'wideo',
        en: 'videos'
    },
    {
        pl: 'utwory',
        en: 'tracks'
    },
    {
        pl: 'sety',
        en: 'sets'
    }
]

//LANGUAGE CHANGE FUNCTION

langChangeEN.addEventListener('click', function () {
    navItems.forEach((item, index) => {
        item.innerHTML = navNames[index].en;
    });

    menuPicsTextTarget.forEach((item, index) => {
        item.innerHTML = menuPicsItems[index].en;
    });

    headings.forEach((item, index) => {
        item.innerHTML = headingsContent[index].en;
    })

    langChangeEN.style.display = "none";
    langChangePL.style.display = "block";
});

langChangePL.addEventListener('click', function () {
    navItems.forEach((item, index) => {
        item.innerHTML = navNames[index].pl;

    });

    menuPicsTextTarget.forEach((item, index) => {
        item.innerHTML = menuPicsItems[index].pl;
    })

    headings.forEach((item, index) => {
        item.innerHTML = headingsContent[index].pl;
    })

    langChangeEN.style.display = "block";
    langChangePL.style.display = "none";

})

//PRELOADER


const preloader = document.querySelector('.preloader');

const body = document.querySelector('body');

window.addEventListener('load', () => {
    preloader.style.display = 'none';
    body.classList.remove('overflow-hidden');
})