console.log('Hello!');

const navStar = document.querySelector("#navStar")
const navGalaxy = document.querySelector("#navGalaxy")
const navWeb = document.querySelector("#navWeb")
const sectionStar = document.querySelector("#sectionStar")
const sectionGalaxy = document.querySelector("#sectionGalaxy")
const sectionWeb = document.querySelector("#sectionWeb")


navStar.addEventListener("click", function() {
    // console.log("Star!")
    // console.log(sectionGalaxy)
    // console.log(sectionStar)
    sectionWeb.classList.add("displayNone")
    sectionGalaxy.classList.add("displayNone")
    sectionStar.classList.toggle("displayNone")
    navWeb.classList.remove("selectedArt")
    navGalaxy.classList.remove("selectedArt")
    navStar.classList.toggle("selectedArt")
    // console.log(sectionGalaxy)
    // console.log(sectionStar)
})

navGalaxy.addEventListener("click", function(){
    // console.log("Galaxy!")
    sectionWeb.classList.add("displayNone")
    sectionGalaxy.classList.toggle("displayNone")
    sectionStar.classList.add("displayNone")
    navWeb.classList.remove("selectedArt")
    navGalaxy.classList.toggle("selectedArt")
    navStar.classList.remove("selectedArt")
})

navWeb.addEventListener("click", function(){
    // console.log("Web!")
    sectionWeb.classList.toggle("displayNone")
    sectionGalaxy.classList.add("displayNone")
    sectionStar.classList.add("displayNone")
    navWeb.classList.toggle("selectedArt")
    navGalaxy.classList.remove("selectedArt")
    navStar.classList.remove("selectedArt")
})
