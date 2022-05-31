export const createlement  = (root,tag, classNames, text,id, atrs)=>{

    const element = document.createElement(tag)

    if(classNames){

        for (const c of classNames) {
            element.classList.add(c)
        }
    }
    if(id) element.id = id
    element.textContent = text
  
    if(atrs){
        for (const atr in atrs) {
            if (Object.hasOwnProperty.call(atrs, atr)) {
                
                element.setAttribute(atr, atrs[atr])
            }
        }
    }

    root.appendChild(element)

}

export const createElementNS = (root,tag, classNames, text,id, atrs)=>{

    const element = document.createElementNS("http://www.w3.org/2000/svg",tag)

    if(classNames){

        for (const c of classNames) {
            element.classList.add(c)
        }
    }
    if(id) element.id = id
    element.textContent = text
  
    if(atrs){
        for (const atr in atrs) {
            if (Object.hasOwnProperty.call(atrs, atr)) {
                
                element.setAttribute(atr, atrs[atr])
            }
        }
    }

    root.appendChild(element)

}

export const cleanNode  = node=>{
    while(node.firstChild){
        node.removeChild(node.firstChild)
    }
}