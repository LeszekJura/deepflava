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

const aboutUsTextTarget = document.querySelectorAll('.heroheaders .aboutus_text p');

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
        pl: 'nowa muzyka',
        en: 'latest music'
    },
    {
        pl: 'nasze media społecznościowe',
        en: 'our social media'
    }
]


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


//EN & PL LANGUAGE VERSION FOR THE MAIN TEXT

const aboutUsTexts = [{
        pl: "Jesteśmy djami i producentami muzycznymi, poruszającymi się w gatunkach house, tech house, melodic, deep house i electronica.",
        en: "We are djs and producers of house, tech house, melodic, deep house & electronica."
    },
    {
        pl: "Występowaliśmy w klubach w naszym rodzinnym mieście, Częstochowie, jak również w Warszawie, Łodzi, Krakowie, Katowicach i wielu innych miejscowościach.",
        en: "We have performed both in our hometown of Czestochowa, Poland, as well as many other Polish cities, including Warsaw, Cracow, Katowice and Lodz."
    },
    {
        pl: "Od 2011 tworzymy własne kawałki, wplatając je w nasze sety, publikując na Youtube i Soundcloud, oraz wydając poprzez rodzime labele.",
        en: "Since 2011 we've been producing our own tracks, which we successfully play in our dj sets. Our music is released on Youtube, Soundcloud and through Polish electronic music labels."
    },
    {
        pl: "<em>Little Green Bag</em> oraz <em>The Flow</em> zostały wydane cyfrowo przez Dust Records. <em>Endless Dreamin'</em> ukazał się na winylu Luzztro Records, wydanym z okazji 10-lecia działalności klubu.",
        en: "Two of our EPs, <em>Little Green Bag</em> & <em>The Flow</em>, were released in digital format by Dust Records. <em>Endless Dreamin'</em> was published on a 12-inch vinyl by Luzztro Records, released to celebrate the 10th anniversary of the Warsaw-based initiative."
    }
]

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

    aboutUsTextTarget.forEach((item, index) => {
        item.innerHTML = aboutUsTexts[index].en;
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

    langChangeEN.style.display = "block";
    langChangePL.style.display = "none";

    aboutUsTextTarget.forEach((item, index) => {
        item.innerHTML = aboutUsTexts[index].pl;
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