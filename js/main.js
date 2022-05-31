import { addWordButtons, addWordlayout } from "./data/addWordView.js";
import { gameButtons, gamelayout } from "./data/gameView.js";
import { buttonContainer, mainButtons } from "./data/mainView.js";
import { generaterandom } from "./helpers/random.js";
import { $, $$ } from "./helpers/selectors.js";

const main = $("main")
let word;

const darkMode  = ()=>{
    $("body").toggleClasses("body-light","body-dark")
    $("header").toggleClass("header-dark")
    $("#bulb").toggleClass("bulb")
    $("#text-custom")?.toggleClasses("textarea-light", "textarea-dark")
    $$(".char")?.forEach(wrapper =>{wrapper.toggleClasses("char-light","char-dark")})
    $(".hang-man")?.toggleClass("hang-man-dark")
}

if(localStorage.getItem("mode")==="dark") {
      darkMode()  
}

$("[data-button='bulb']").onClick( event =>{
    event.preventDefault()
    darkMode()
    localStorage.setItem("mode", localStorage.getItem("mode")!=="dark"? "dark":"light")
})

const _verifyInputWord = event=>{
    if(event.target.value.includes(" ")) console.log("input no valido")
    if(event.target.value.length>8){event.target.value = event.target.value.slice(0,-1)}
}

const createWordsView = word=>{
    const chars =[]
    for (let charPosition = 0; charPosition < word.length ; charPosition++) {
        chars.push({
            tag:"span", 
            classNames:["char","char-light"], 
            id:`char-${charPosition}`,
            atrs:{style:`width:${90/word.length}%`}
        })
        
    }
    return chars
}

const saveAndGetWord = ()=>{
    const data = $("[data-textarea='custom-input']").element.value
    if(data.length<=8) {
        let {words} = JSON.parse(localStorage.getItem("words") ?? `{"words":["pollo","perrito"]}`)
        localStorage.setItem("words",JSON.stringify({words:[data,...words]}));
        return getWord()
    }else{
        console.log("no es una entrada valida")
    }
}

const getWord = ()=>{
        localStorage.setItem("words",localStorage.getItem("words") ?? `{"words":["pollo","perrito"]}`)
        const {words} = JSON.parse(localStorage.getItem("words"))
        
        const randomWordIndex = generaterandom(words.length-1)
        word =words[randomWordIndex]
        console.log(word)
        main.removeChildren().insertChildren(gamelayout)
        $("[data-button='main-buttons-game']").insertChildren(gameButtons)
        const chars =  createWordsView(word)
        
        $("#chars")
        .insertChildren(chars)

        $("[data-button='new-game']").onClick(startGame)
        
        return word
   
}

let missedLeters =[]
let tries = 0;
const _hangManHandler = event =>{

    if(word && $(".char").element &&tries!==10){

        if(word.includes(event.key)  ){
            console.log("length",word.length)
            for (let index = 0; index < word.length; index++) {
                console.log(word)
                if(word[index]===event.key){
                    $(`#char-${index}`).element.textContent = event.key;
                    console.log(index)
    
                }
                
            }
        }else{
            if(!missedLeters.find(e=>e===event.key) &&tries!==10 && event.key){
                console.log("mistake")
                missedLeters.push(event.key)
                $(".hang-man").element.setAttribute("src",`./assets/hangman${++tries}.svg`)
            
            }
        
        }
    
       let flag = true
        $$(".char").forEach(wrapper=>{flag=flag&&wrapper.element.textContent!==""})

        if(flag){
            word = void(0)
            missedLeters = []
        }
        
    }
       
}

const _saveAndStartHandler = event=>{
    
    word = saveAndGetWord()
    $("[data-button='game-over']").onClick(cancel)
    tries = 0;
    document.addEventListener("keydown",_hangManHandler(word))
}


const __addwordhandler = ()=>{
    $("[data-button='add-word']").onClick(event=>{
        event.preventDefault()
        
        
        main.removeChildren().insertChildren(addWordlayout)
    
        $("[data-button='main-buttons']").insertChildren(addWordButtons)
    
        $("[data-button='cancel']").onClick(cancel)
    
        if(localStorage.getItem("mode")==="dark") {
            $("#text-custom")?.toggleClasses("textarea-light", "textarea-dark")
            $$(".char")?.forEach(wrapper =>{wrapper.toggleClasses("char-light","char-dark")})
            $(".hang-man")?.toggleClass("hang-man-dark")
        }
      
        $("[data-textarea='custom-input']").onInput(_verifyInputWord).on("change", _verifyInputWord)
    
        
        $("[data-button='save-and-start']").onClick(_saveAndStartHandler)
    })
}

const cancel = event =>{
        main.removeChildren().insertChildren(buttonContainer)

        $(".button-container-main").insertChildren(mainButtons)

        __addwordhandler()
        mainStar()
        document.removeEventListener("keypress",_hangManHandler("A"))
        if(localStorage.getItem("mode")==="dark") {
            $("#text-custom")?.toggleClasses("textarea-light", "textarea-dark")
            $$(".char")?.forEach(wrapper =>{wrapper.toggleClasses("char-light","char-dark")})
            $(".hang-man")?.toggleClass("hang-man-dark")
        }
        tries = 0
}

const startGame = ()=>{
    
    word = getWord()
    $("[data-button='game-over']").onClick(cancel)
    if(localStorage.getItem("mode")==="dark") {
        $("#text-custom")?.toggleClasses("textarea-light", "textarea-dark")
        $$(".char")?.forEach(wrapper =>{wrapper.toggleClasses("char-light","char-dark")})
        $(".hang-man")?.toggleClass("hang-man-dark")
    }
    
}
const mainStar = ()=>{
    
    $("[data-button='main']").onClick(startGame)
    if(localStorage.getItem("mode")==="dark") {
        $("#text-custom")?.toggleClasses("textarea-light", "textarea-dark")
        $$(".char")?.forEach(wrapper =>{wrapper.toggleClasses("char-light","char-dark")})
        $(".hang-man")?.toggleClass("hang-man-dark")
    }
}
document.addEventListener("keypress",_hangManHandler)

mainStar()


__addwordhandler()