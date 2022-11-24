const body = document.body
let lastScroll = 0

window.addEventListener("scroll", function() {
    const currentScroll = this.window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }
    
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }
    lastScroll = currentScroll
    console.log(currentScroll)
})

function show() {
    document.querySelector(".hamburger").classList.toggle("open")
    document.querySelector(".navigation").classList.toggle("active")
}

const nextBtn = document.querySelector(".next-btn")
const backBtn = document.querySelector(".back-btn")
const formEl = document.querySelector(".form-section-two-container")

nextBtn.addEventListener("click", function() {
    formEl.style.left = "-100%";
    formEl.style.bottom = "-10%";
})

backBtn.addEventListener("click", function() {
    formEl.style.left = "0%";
})

function sendMail() {
    const persons = document.getElementById("persons").value
    const adult = document.getElementById("adult").value
    const kid = document.getElementById("kid").value
    const age = document.getElementById("age").value
    const date = document.getElementById("date").value
    const nights = document.getElementById("nights").value
    const wish = document.getElementById("wish").value   
    const sex = document.getElementById("sex").value
    const firstname = document.getElementById("fname").value
    const lastname = document.getElementById("lname").value
    const email = document.getElementById("email").value
    const telnumber = document.getElementById("telnumber").value
    const street = document.getElementById("street").value
    const city = document.getElementById("location").value
    const locnumber = document.getElementById("locnumber").value
    const country = document.getElementById("country").value
    const fax = document.getElementById("fax").value
    var params = {
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        message: `
            Apartment: ${persons}
            Erwachsene: ${adult}
            Kinder: ${kid}
            Alter (Kinder): ${age}
            Terminwunsch: ${date}
            Nächte: ${nights}
            Wünsche/Anregungen: ${wish}
            Anrede: ${sex}
            Vorname: ${firstname}
            Nachname: ${lastname}
            E-Mail: ${email}
            Telefon: ${telnumber}
            Straße: ${street}
            Ort: ${city}
            PLZ: ${locnumber}
            Land: ${country}
            Fax: ${fax}
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








// var counter = 1;
// setInterval(function() {
//   document.querySelector(".slide" + counter).classList.add("slideleft")
//   counter++
//   if (counter > 5) {
//     counter = 1;
//   }
// }, 3000);