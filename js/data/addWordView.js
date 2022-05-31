export const addWordlayout = [
    {
        tag:"textarea", 
        classNames:["textarea" ,"textarea-light"], 
        id:"text-custom", 
        atrs:{"data-textarea":"custom-input",placeholder:"Ingrese texto aqui"}
    },
    {
        tag:"div", 
        classNames:["button-container","flex","flex-center"] , 
        atrs:{"data-button":"main-buttons"}
    }
]

export const addWordButtons = [
    {tag:"button", classNames:["alura", "button"], text:"Guardar y empezar", atrs:{"data-button":"save-and-start"}},
    {tag:"button", classNames:["alura-v2","button"], text:"Cancelar", atrs:{"data-button":"cancel"}}
]