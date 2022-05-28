export const createlement  = (root,tag, classNames, text,id)=>{

    const element = document.createElement(tag)
    console.log(element)
    for (const c of classNames) {
        console.log(c)
        element.classList.add(c)
    }
    if(id) element.id = id
    element.textContent = text
    root.appendChild(element)

}

export const cleanNode  = node=>{
    while(node.firstChild){
        node.removeChild(node.firstChild)
    }
}