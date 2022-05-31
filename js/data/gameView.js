export const gamelayout = [
    /* {tag:"svg", classNames:["hang-man"],atrs:{
        "data-svg":"hang",
        width:"288",
        height:"351",
        viewBox:"0 0 288 351",
        fill:"none",
        xmlns:"http://www.w3.org/2000/svg"
    }}, */
    {tag:"img", atrs:{src:"./assets/hangman0.svg" }, classNames:["hang-man"]},
    {tag:"div", classNames:["flex","flex-b"], id:"chars"},
    {tag:"div", classNames:["button-container","flex","flex-center"],atrs:{"data-button":"main-buttons-game"}}
]

export const gameButtons= [
    {tag:"button", classNames:["alura", "button"], text:"Nuevo juego", atrs:{"data-button":"new-game"}},
    {tag:"button", classNames:["alura-v2","button"], text:"Desistir", atrs:{"data-button":"game-over"}}
]