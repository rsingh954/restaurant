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

function menuTab(rowNum, container) {
    let flag;
        let createRow = document.createElement('div');
        createRow.classList.add("menu-grid");
        document.body.appendChild(createRow);
        for (let i = 0; i < rowNum; i++) {
            const row = document.createElement('div')
            row.classList.add("row")
            createRow.appendChild(row);
        }
    return
}


export  {handler, menuTab}