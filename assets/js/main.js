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
let bmiCalculator = document.getElementById("bmi-calcu") //nambah bmicalculator
let formBMI = document.getElementById("form-bmi") //id di html untuk nambahin
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
formBMI.style.display = 'none';

bmiCalculator.addEventListener("click", function (event) {
   event.preventDefault()
   document.getElementById("homepageMyplate").style.display = "none";
   formBMI.style.display = 'block';

});

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

   document.getElementById('kalori-form').innerHTML = hitungKalori(quiz)
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


function foodList(){
  let food = [
    {
        nama: 'nasi',
        calorie: 175,
        gram: 100
    },
    {
        nama: 'nasi goreng',
        calorie: 267,
        gram: 100
    },
    {
        nama: 'sate ayam',
        calorie: 466,
        gram: 100
    },
    {
        nama: 'siomay',
        calorie: 361,
        gram: 100
    },
    {
        nama: 'telur goreng',
        calorie: 92,
        gram: 100
    },
    {
        nama: 'roti tawar',
        calorie: 128,
        gram: 50
    },
    {
        nama: 'mie instant',
        calorie: 168,
        gram: 50
    },
    {
        nama: 'ayam panggang',
        calorie: 164.3,
        gram: 100
    },
    {
        nama: 'pepaya',
        calorie: 46,
        gram: 100
    },
    {
        nama: 'apel',
        calorie: 92,
        gram: 160
    },
    {
        nama: 'alpukat',
        calorie: 85,
        gram: 100
    },
    {
        nama: 'tempe goreng',
        calorie: 200,
        gram: 100
    },
    {
        nama: 'pisang ambon',
        calorie: 74.2,
        gram: 100
    },
    {
        nama: 'anggur',
        calorie: 60,
        gram: 125
    },
    {
        nama: 'sayur lodeh',
        calorie: 61,
        gram: 100
    },
    {
        nama: 'sayur asam',
        calorie: 88,
        gram: 100
    },
    {
        nama: 'sop bayam',
        calorie: 78,
        gram: 50
    },
    {
        nama: 'tahu goreng',
        calorie: 111,
        gram: 100
    },
 ]

    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    let counter = 0
    let hasil = 0
    // creating all cells
    for (let i = 0; i < food.length; i++) {
        
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");
        const cell4 = document.createElement("td");
        const menuMakanan = document.getElementById('menu-makanan')
        const cellText = document.createTextNode(`${food[i].nama}`);
        const gram = document.createTextNode(`${food[i].gram}`);
        const calorie = document.createTextNode(`${food[i].calorie}`)

        const infoButton = document.createElement('button')
        infoButton.innerHTML = 'add'
        infoButton.classList.add('add-btn')

        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'add'

        cell.appendChild(cellText);
        cell2.appendChild(gram);
        cell3.appendChild(calorie);

        row.appendChild(cell);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(infoButton);

        menuMakanan.appendChild(row);
        infoButton.addEventListener("click", function(){ 
        document.getElementById('calorie-harian').innerHTML += `<tr><td>${food[i].nama}</td><td>${food[i].gram}</td><td>${food[i].calorie}</td><td><button onclick="deleteRow(${counter})">Delete</button></td></tr>`; 
        counter++
        document.getElementById('kalori-form').innerHTML = hitungKalori(quiz) - food[i].calorie
        }); 
    }

}
foodList()

function deleteRow(index){
    let el = document.getElementById('calorie-harian')
    var children = el.children;
    if(children.length > 0) {
        el.removeChild(children[index]);
    }
    foodList()
}


      let container = document.getElementById("container");
        let gender = document.getElementById("gender");
        let age = document.getElementById("age").value;
        let height = document.getElementById("height");
        let weight = document.getElementById("weight");
        let result = document.getElementById("result");
        let display = document.getElementById("display");
        let comment = document.getElementById("comment");
        let submit = document.getElementById("submit");
        let input = document.getElementsByTagName("input");
        let bmi;

        function calculateBMI() {
            bmi = weight.value / ((height.value * height.value)/10000);
            bmi = bmi.toFixed(1);
        }

        function changeVisuals() {
            display.innerHTML = "YOUR RESULT";
            result.innerHTML = bmi;
            result.style.fontSize = "3rem";

            if (bmi <= 18.4) {
                formBMI.style.backgroundColor = "#7ea1dc";
                formBMI.style.color = "var(--light)";
                submit.style.backgroundColor = "#cf552d";
                comment.innerHTML = "Underweight";
            } else if (bmi > 18.4 && bmi < 24.9) {
                formBMI.style.backgroundColor = "#92ea8f";
                formBMI.style.color = "var(--dark)";
                submit.style.backgroundColor = "#bf6b6b";
                comment.innerHTML = "Normal";
            } else if (bmi >= 25 && bmi < 29.9) {
                formBMI.style.backgroundColor = "#ffd47b";
                formBMI.style.color = "var(--dark)";
                submit.style.backgroundColor = "#bf6b6b";
                comment.innerHTML = "Overweight";
            } else {
                formBMI.style.backgroundColor = "#ff5f5f";
                formBMI.style.color = "var(--light)";
                submit.style.backgroundColor = "#c233e6";
                comment.innerHTML = "Obsesity";
            }

        }


        submit.addEventListener('click', () => {
            calculateBMI();
            changeVisuals();
            if (weight.value === 0 || height.value === 0) {
                comment.innerHTML = 'Enter some value';
            } 
        }); 