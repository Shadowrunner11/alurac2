import { $ } from "./helpers/selectors.js";


const darkMode  = ()=>{
    $("body").toggleClasses("body-light","body-dark")
    $("header").toggleClass("header-dark")
    $("#bulb").toggleClass("bulb")
    $("#title-2")?.toggleClasses("title-light", "title-dark")
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
    const main = $("main")

    main
    .removeChildren()
    .insertChildren([
        {tag: "h1", classNames:["title-light"], text:"Ingrese una palabra", id:"title-2"},
        {tag:"textarea", classNames:["textarea" ,"textarea-light"], id:"text-custom", atrs:{"data-textarea":"custom-input"}},
        {tag:"div", classNames:["button-container","flex","flex-center"] , atrs:{"data-button":"main-buttons"}}
    ])

    $("[data-button='main-buttons']").insertChildren([
        {tag:"button", classNames:["alura", "button"], text:"Guardar y empezar", atrs:{"data-button":"save-and-start"}},
        {tag:"button", classNames:["alura-v2","button"], text:"Cancelar"}
    ])
    
    if(localStorage.getItem("mode")==="dark") {
        $("#title-2")?.toggleClasses("title-light", "title-dark") 
    }
  
    $("[data-textarea='custom-input']").onInput(event=>{
        if(event.target.value.includes(" ")) console.log("input no valido")
    })

    $("[data-button='save-and-start']").onClick(event=>{
        const data = $("[data-textarea='custom-input']").element.value
        main
        .removeChildren()
        .insertChildren([
            {tag:"svg", classNames:["hang-man"]},
            {tag:"div", classNames:["flex","flex-b"], id:"chars"}
        ])
        
        const chars =[]
        for (let charPosition = 0; charPosition < data.length ; charPosition++) {
            chars.push({tag:"span", classNames:["char"], id:`char-${charPosition}`, atrs:{style:`width:${90/data.length}%`}})
            
        }
        $("#chars")
        .insertChildren(chars)
    })
})

