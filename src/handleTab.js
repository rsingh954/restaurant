import { article } from "./homeTab";

const handler = () =>{
    const nav = document.querySelector(".nav");
    let arts = document.querySelector(".art");
    nav.addEventListener("click", (e) =>{
        const {target} = e;
        
        if(target.className === "nav"){
            return
        }
        else if(e.target.innerHTML === "Menu"){
        arts.style.cssText = "visibility: visible";
        return
        }
        console.log(e.target.innerHTML)
    
    
    })

}

export default handler;