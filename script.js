// declare Swiper.js .classes
const myCustomSlider = document.querySelectorAll('.zwoa');

// declare navigation arrows classes
const mySliderPrev = document.querySelectorAll('.swiper-backBtn');
const mySliderNext = document.querySelectorAll('.swiper-nextBtn');
const mySliderPag = document.querySelectorAll('.swiper-pagination');


for( i=0; i< myCustomSlider.length; i++ ) {
// add special class with number to each Swiper.js slider and its nabigation arrows  
  myCustomSlider[i].classList.add('zwoa-' + i);
  mySliderPrev[i].classList.add('swiper-backBtn-' + i);
  mySliderNext[i].classList.add('swiper-nextBtn-' + i);
  mySliderPag[i].classList.add('swiper-pagination-' + i);

// Initiate the Sliders
  var vidswiper = new Swiper('.zwoa-' + i, {
   // Set sliders parameters
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    pagination: {
      el: ".swiper-pagination-" +i,
      clickable: true,
    //   dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-nextBtn-' +i,
        prevEl: '.swiper-backBtn-' +i,
    },
  });

}







// var counter = 1
// setInterval(function(){
//     if (document.getElementById("radio" + counter).checked = true) {
//         document.querySelector(".manual-btn" + counter).style.background = "orange";
//     }

//     document.getElementById("radio" + counter).checked = true

//     counter++

//     if(counter > 5){
//         counter = 1
//     }
// }, 3000)


const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", function() {
    if (this.window.pageYOffset > 100) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})

toTop.addEventListener("click", function() {
    window.scrollTo(0, 0)
})

// const body = document.body
// let lastScroll = 0

// window.addEventListener("scroll", function() {
//     const currentScroll = this.window.pageYOffset

//     if (currentScroll > lastScroll) {
//         body.classList.add("scroll-down")
//     }
    
//     if (currentScroll < lastScroll) {
//         body.classList.remove("scroll-down")
//     }

//     if (currentScroll < 70) {
//         body.classList.add("scroll-down")
//     }

//     if (currentScroll >= 0) {
//         lastScroll = currentScroll
//     }
//     console.log(currentScroll)
// })

function readMore() {
    document.querySelector(".anreise-text").classList.toggle("read-more")
    document.querySelector(".anreise-text-p").classList.toggle("read-more")
    document.querySelector(".anreise-text-rm").classList.toggle("read-more")
}

function readMoreOne() {
    document.querySelector(".holiday-text-one").classList.toggle("read-more")
    document.querySelector(".holiday-text-p-one").classList.toggle("read-more")
    document.querySelector(".holiday-text-rm-one").classList.toggle("read-more")
}

function readMoreTwo() {
    document.querySelector(".holiday-text-two").classList.toggle("read-more")
    document.querySelector(".holiday-text-p-two").classList.toggle("read-more")
    document.querySelector(".holiday-text-rm-two").classList.toggle("read-more")
}

function showCopy() {
    document.querySelector(".copyright").classList.toggle("show")
    document.querySelector(".copyright-p").classList.toggle("show")
    document.querySelector(".fa-camera").classList.toggle("show")
}

function showGallery() {
    document.querySelector(".a-two-small-summer").classList.toggle("show")
    document.querySelector(".a-two-small-winter").classList.toggle("show")
}

function show() {
    document.querySelector(".body").classList.toggle("locked")
    document.querySelector(".hamburger").classList.toggle("open")
    document.querySelector(".navigation").classList.toggle("active")
}

function showArchitectOne() {
    document.querySelector(".architect-parent-one").classList.add("show")
}

function removeArchitectOne() {
    document.querySelector(".architect-parent-one").classList.remove("show")
}

function showArchitectTwo() {
    document.querySelector(".architect-parent-two").classList.add("show")
}

function removeArchitectTwo() {
    document.querySelector(".architect-parent-two").classList.remove("show")
}

document.onclick = function(clickEvent) {
    if (clickEvent.target.id == "a-two-gallery" && clickEvent.target.id !== "a-two" && clickEvent.target.id !== "navigation" && clickEvent.target.id !== "hamburger" && clickEvent.target.id !== "bar1" && clickEvent.target.id !== "bar2" && clickEvent.target.id !== "bar3") {
        document.querySelector(".body").classList.remove("locked")
        document.querySelector(".hamburger").classList.remove("open")
        document.querySelector(".navigation").classList.remove("active")
    }
}

function goToNext() {
    document.getElementById("formelementtwo").scrollIntoView()
    // setTimeout(function() {
    //     window.scrollBy(0, -70)
    // }, 500)
}

function goToBack() {
    document.getElementById("formelementone").scrollIntoView()
}

const nextBtn = document.querySelector(".next-btn")
const backBtn = document.querySelector(".back-btn")
const formEl = document.querySelector(".form-section-two-container")

nextBtn.addEventListener("click", function() {
    // formEl.style.left = "-100%";
    document.getElementById("formelementtwo").scrollIntoView()
})

backBtn.addEventListener("click", function() {
    // formEl.style.left = "0%";
    document.getElementById("formelementone").scrollIntoView()

})

function arrowBed() {
    const imgArrowBed = document.querySelector(".img-arrow-bed")
    const arrowBed = document.querySelector(".show-text-bed")
    imgArrowBed.classList.toggle("show")
    arrowBed.classList.toggle("show")
}

function arrowKitchen() {
    const imgArrowKitchen = document.querySelector(".img-arrow-kitchen")
    const arrowKitchen = document.querySelector(".show-text-kitchen")
    imgArrowKitchen.classList.toggle("show")
    arrowKitchen.classList.toggle("show")
}

function arrowBath() {
    const imgArrowBath = document.querySelector(".img-arrow-bath")
    const arrowBath = document.querySelector(".show-text-bath")
    imgArrowBath.classList.toggle("show")
    arrowBath.classList.toggle("show")
}

function arrowBed2() {
    const imgArrowBed = document.querySelector(".img-arrow-bed2")
    const arrowBed = document.querySelector(".show-text-bed2")
    imgArrowBed.classList.toggle("show")
    arrowBed.classList.toggle("show")
}

function arrowKitchen2() {
    const imgArrowKitchen = document.querySelector(".img-arrow-kitchen2")
    const arrowKitchen = document.querySelector(".show-text-kitchen2")
    imgArrowKitchen.classList.toggle("show")
    arrowKitchen.classList.toggle("show")
}

function arrowBath2() {
    const imgArrowBath = document.querySelector(".img-arrow-bath2")
    const arrowBath = document.querySelector(".show-text-bath2")
    imgArrowBath.classList.toggle("show")
    arrowBath.classList.toggle("show")
}

function sendMail() {
    const persons = document.getElementById("persons").value
    const adult = document.getElementById("adult").value
    const kid = document.getElementById("kid").value
    const age = document.getElementById("age").value
    const datein = document.getElementById("datein").value
    const dateout = document.getElementById("dateout").value
    const wish = document.getElementById("wish").value   
    const sex = document.getElementById("sex").value
    const firstname = document.getElementById("fname").value
    const lastname = document.getElementById("lname").value
    const email = document.getElementById("email").value
    const telnumber = document.getElementById("telnumber").value
    const street = document.getElementById("street").value
    const hnumber = document.getElementById("hnumber").value
    const city = document.getElementById("location").value
    const locnumber = document.getElementById("locnumber").value
    const country = document.getElementById("country").value
    var params = {
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        message: `
            Apartment: ${persons}
            Erwachsene: ${adult}
            Kinder: ${kid}
            Alter (Kinder): ${age}
            Tag der Anreise: ${datein}
            Tag der Abreise: ${dateout}
            Wünsche/Anregungen: ${wish}
            Anrede: ${sex}
            Vorname: ${firstname}
            Nachname: ${lastname}
            E-Mail: ${email}
            Telefon: ${telnumber}
            Straße: ${street}
            Hausnummer: ${hnumber}
            Ort: ${city}
            PLZ: ${locnumber}
            Land: ${country}
        `
    }
    const serviceId = "service_jjgus4m"
    const templateId = "template_25fsecj"
    
    emailjs
    .send(serviceId, templateId, params)
    .then(response => {
        console.log(response)
        alert("Deine Nachricht wurde erfolgreich gesendet")
    })
    .catch(err => {
        console.log("Error")
    })
}









// var count = 0
// setInterval(function() {
//     document.querySelector(".slide" + count).classList.remove("slideleft")
//     count++
//   if (count > 5) {
//     count = 1;
//   }
// }, 3000);