import { $ } from "./helpers/selectors.js";


const darkMode  = ()=>{
    $("body").toggleClasses("body-light","body-dark")
    $("header").toggleClass("header-dark")
    $("#bulb").toggleClass("bulb")
}

if(localStorage.getItem("mode")==="dark") {
      darkMode()  
}


$("[data-button='bulb']").onClick( event =>{
    event.preventDefault()
    darkMode()
    localStorage.setItem("mode", localStorage.getItem("mode")!=="dark"? "dark":"light")
})

$("[data-button='main']").onClick(event=>{
    event.preventDefault()
    $("main")
        .removeChildren()
        .insertChildren([
            {tag:"textarea", classNames:["textarea"]},
            {tag:"button", classNames:["alura", "button"], text:"Guardar y empezar"},
            {tag:"button", classNames:["alura-v2","button"], text:"Cancelar"}
        ])
})