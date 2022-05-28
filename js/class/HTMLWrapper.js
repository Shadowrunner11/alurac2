import { cleanNode, createlement } from "../helpers/insetrt.js"

class HTMLWrapper{
    constructor(element){
        this.element = element
    }
    on(event, handler, option=false){
        this.element.addEventListener(event, handler, option)
        return this
    }
    onClick(handler, option=false){
        return this.on("click", handler, option)
    }
    toggleClasses(class1, class2){
        this.element.classList.toggle(class1)
        this.element.classList.toggle(class2)
        return this
    }
    toggleClass(className){
        this.element.classList.toggle(className)
        return this
    }
    removeChildren(){
        cleanNode(this.element)
        return this
    }
    insertChildren(children){
        children.forEach(e=>{
            createlement(this.element, e.tag, e.classNames, e.text, e.id)
        })
    }
}

export default HTMLWrapper  