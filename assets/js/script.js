var shoot = document.querySelector("body")
var ammo = document.querySelector(".ammo-cont")
var ammunitation = 30
var audio = document.querySelector("audio")
var gun = document.querySelector(".gun")
var target = document.querySelector(".target")
var points = document.querySelector(".points")


function shooter() {
    console.log("atirou!")
    ammunitation--
    ammo.innerHTML = ammunitation
    audio.play()
    audio.currentTime = 0
    if(gun.classList.contains("shooting")) {
        gun.classList.remove("shooting")
    } else {
        gun.classList.add("shooting")
    }
}

let point = 0

function win() {
    lista = [
        800,
        200,
        500,
        400,
        600,
        100
    ]

    let randomNum = lista[Math.floor(Math.random() * lista.length )]
    console.log(randomNum)

    x = 0
    target.style.left = `${randomNum}px`
    target.style.top = `${randomNum}px`
    
    
    point++
    points.innerHTML = point

}

function reload() {
    var reload = document.querySelector("#reload")
    ammunitation = 30
    ammo.innerHTML = ammunitation
    reload.play()
}