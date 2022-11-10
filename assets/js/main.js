/**
 * Template Name: Medilab - v4.9.1
 * Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
   "use strict";

   /**
    * Easy selector helper function
    */
   const select = (el, all = false) => {
      el = el.trim()
      if (all) {
         return [...document.querySelectorAll(el)]
      } else {
         return document.querySelector(el)
      }
   }

   /**
    * Easy event listener function
    */
   const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
         if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
         } else {
            selectEl.addEventListener(type, listener)
         }
      }
   }

   /**
    * Easy on scroll event listener 
    */
   const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
   }

   /**
    * Navbar links active state on scroll
    */
   let navbarlinks = select('#navbar .scrollto', true)
   const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
         if (!navbarlink.hash) return
         let section = select(navbarlink.hash)
         if (!section) return
         if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
         } else {
            navbarlink.classList.remove('active')
         }
      })
   }
   window.addEventListener('load', navbarlinksActive)
   onscroll(document, navbarlinksActive)

   /**
    * Scrolls to an element with header offset
    */
   const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight

      let elementPos = select(el).offsetTop
      window.scrollTo({
         top: elementPos - offset,
         behavior: 'smooth'
      })
   }

   /**
    * Toggle .header-scrolled class to #header when page is scrolled
    */
   let selectHeader = select('#header')
   let selectTopbar = select('#topbar')
   if (selectHeader) {
      const headerScrolled = () => {
         if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
            if (selectTopbar) {
               selectTopbar.classList.add('topbar-scrolled')
            }
         } else {
            selectHeader.classList.remove('header-scrolled')
            if (selectTopbar) {
               selectTopbar.classList.remove('topbar-scrolled')
            }
         }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
   }

   /**
    * Back to top button
    */
   let backtotop = select('.back-to-top')
   if (backtotop) {
      const toggleBacktotop = () => {
         if (window.scrollY > 100) {
            backtotop.classList.add('active')
         } else {
            backtotop.classList.remove('active')
         }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
   }

   /**
    * Mobile nav toggle
    */
   on('click', '.mobile-nav-toggle', function (e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
   })

   /**
    * Mobile nav dropdowns activate
    */
   on('click', '.navbar .dropdown > a', function (e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
         e.preventDefault()
         this.nextElementSibling.classList.toggle('dropdown-active')
      }
   }, true)

   /**
    * Scrool with ofset on links with a class name .scrollto
    */
   // on('click', '.scrollto', function (e) {
   //    if (select(this.hash)) {
   //       e.preventDefault()

   //       let navbar = select('#navbar')
   //       if (navbar.classList.contains('navbar-mobile')) {
   //          navbar.classList.remove('navbar-mobile')
   //          let navbarToggle = select('.mobile-nav-toggle')
   //          navbarToggle.classList.toggle('bi-list')
   //          navbarToggle.classList.toggle('bi-x')
   //       }
   //       scrollto(this.hash)
   //    }
   // }, true)

   /**
    * Scroll with ofset on page load with hash links in the url
    */
   window.addEventListener('load', () => {
      if (window.location.hash) {
         if (select(window.location.hash)) {
            scrollto(window.location.hash)
         }
      }
   });

   /**
    * Preloader
    */
   let preloader = select('#preloader');
   if (preloader) {
      window.addEventListener('load', () => {
         preloader.remove()
      });
   }

   /**
    * Initiate glightbox 
    */
   //   const glightbox = GLightbox({
   //     selector: '.glightbox'
   //   });

   /**
    * Initiate Gallery Lightbox 
    */
   //   const galelryLightbox = GLightbox({
   //     selector: '.galelry-lightbox'
   //   });

   /**
    * Testimonials slider
    */
   //   new Swiper('.testimonials-slider', {
   //     speed: 600,
   //     loop: true,
   //     autoplay: {
   //       delay: 5000,
   //       disableOnInteraction: false
   //     },
   //     slidesPerView: 'auto',
   //     pagination: {
   //       el: '.swiper-pagination',
   //       type: 'bullets',
   //       clickable: true
   //     },
   //     breakpoints: {
   //       320: {
   //         slidesPerView: 1,
   //         spaceBetween: 20
   //       },

   //       1200: {
   //         slidesPerView: 2,
   //         spaceBetween: 20
   //       }
   //     }
   //   });

   /**
    * Initiate Pure Counter 
    */
   //   new PureCounter();

})()


let formButton = document.getElementById("penting");
let form = document.getElementById('soal1');
let form1 = document.getElementById('soal2');
let form2 = document.getElementById('soal3');
let form3 = document.getElementById('soal4');
let table_kalori = document.getElementById('table-total-kalori');
let table_makanan = document.getElementById('table-menu-makanan');
let next = document.getElementById('lanjutkan1');
let next1 = document.getElementById('lanjutkan2');
let next2 = document.getElementById('lanjutkan3');
let next3 = document.getElementById('lanjutkan4');
form.style.display = "none";
form1.style.display = "none";
form2.style.display = "none";
form3.style.display = "none";
table_kalori.style.display = "none";
table_makanan.style.display = "none";

formButton.addEventListener("click", function (event) {
   event.preventDefault()
   document.getElementById("homepageMyplate").style.display = "none";
   form.style.display = 'block';

});

next.addEventListener("click", function (event) {

   event.preventDefault()
   form.style.display = "none";
   form1.style.display = 'block';

});


next1.addEventListener("click", function (event) {

   event.preventDefault()
   form1.style.display = "none";
   form2.style.display = 'block';
   let kelamin = document.getElementsByName('inlineRadioOptions');
   for (let i = 0; i < kelamin.length; i++) {

      if (kelamin[i].checked === true) {

         quiz.gender = kelamin[i].value;
      }
   }
   let age = document.getElementById('input-age');

   quiz.umur = Number(age.value);

});

next2.addEventListener("click", function (event) {
   event.preventDefault()
   form2.style.display = "none";
   form3.style.display = 'block';

   let tinggiBadan = document.getElementById('tinggiT');
   let beratBadan = document.getElementById('badanB');

   quiz.tinggi = Number(tinggiBadan.value);
   quiz.bb = Number(beratBadan.value);

});

next3.addEventListener("click", function (event) {
   event.preventDefault()
   form3.style.display = 'none';
   table_kalori.style.display = "block";
   table_makanan.style.display = "block";

   console.log(hitungKalori(quiz));
});


function hitungKalori(data) {

   console.log(data);
   let kalori = 0
   if (data.gender === 'Pria') {
      kalori = Math.round((10 * data.bb) + (6.25 * data.tinggi) - (5 * data.umur) + 5)
   } else if (data.gender === 'Wanita') {
      kalori = Math.round((10 * data.bb) + (6.25 * data.tinggi) - (5 * data.umur) - 161);
   }
   if (data.kegiatan === 'sedentary') {
      kalori *= 1.2
   } else if (data.kegiatan === 'ligthly active') {
      kalori *= 1.375
   } else if (data.kegiatan === 'moderately active') {
      kalori *= 1.55
   } else if (data.kegiatan === 'very active') {
      kalori *= 1.725
   } else if (data.kegiatan === 'extra active') {
      kalori *= 1.9
   }
   if (data.weight === 'lose weight') {
      kalori -= 500
   }
   if (data.weight === 'gain weight') {
      kalori += 500
   }


   return kalori
}


function habit(value) {


   quiz.kegiatan = value;
}

function goal(value) {

   quiz.weight = value;
}
let quiz = {
   gender: '',
   umur: 0,
   tinggi: 0,
   bb: 0,
   kegiatan: '',
   weight: ''
}

// let quiz = {
//    bb: 75,
//    gender: "Pria",
//    kegiatan: "moderately active",
//    tinggi: 175,
//    umur: 22,
//    weight: "lose weight",
// }