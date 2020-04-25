import { article } from "./homeTab";

const handler = (container) =>{
    const nav = document.querySelector(".nav");
    let arts = document.querySelector(".art");
    nav.addEventListener("click", (e) =>{
        const {target} = e;
        
        if(target.className === "nav"){
            return
        }
        console.log(e.target.innerHTML)
    
    
    })

}

let menuItem = ["Ham... | 5.75  | Large 7.00", "Turkey... | 5.00 | Large 6.00", "Chicken... | 6.00 | Large 7.00", "Proscuito... | 6.50 | Large 7.00"]

function menuTab(container) {
    let flag;
        let createRow = document.createElement('div');
        createRow.classList.add("menu-grid");
        document.body.appendChild(createRow);
        for (let i = 0; i < menuItem.length; i++) {
            const row = document.createElement('div')
            row.classList.add("row");
            row.innerHTML += `${menuItem[i]}`;
            createRow.appendChild(row);
            
        }
    return
}


export  {handler, menuTab}